"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";

interface Message {
    id: number;
    role: "user" | "ai";
    content: string;
}

/* ---------- Section Parser ---------- */
function parseSections(text: string) {
    const sections: Record<string, string> = {};
    let current = "";

    text.split("\n").forEach((line) => {
        if (line.startsWith("📖")) current = "Story";
        else if (line.startsWith("📜")) current = "Constitutional Basis";
        else if (line.startsWith("⚖️")) current = "Argument";
        else if (line.startsWith("🧠")) current = "Counter Argument";
        else if (line.startsWith("✅")) current = "Conclusion";
        else if (current) {
            sections[current] = (sections[current] || "") + line + "\n";
        }
    });

    return sections;
}

/* ---------- Main Component ---------- */
export default function DebateChat() {
    const [mounted, setMounted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loadingStage, setLoadingStage] = useState<
        null | "thinking" | "responding"
    >(null);

    // ✅ Hydration fix
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // ⬅️ CRITICAL LINE

    const sendMessage = async () => {
        if (!input.trim() || loadingStage) return;

        const userText = input;
        setInput("");

        setMessages((prev) => [
            ...prev,
            { id: Date.now(), role: "user", content: userText },
        ]);

        setLoadingStage("thinking");

        try {
            const res = await fetch("/api/groq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: userText }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    role: "ai",
                    content: data.reply || "No response.",
                },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 2,
                    role: "ai",
                    content: "⚠️ Error getting response.",
                },
            ]);
        } finally {
            setLoadingStage(null);
        }
    };

    return (
        <div className="flex flex-col h-full bg-neutral-950 text-neutral-100">

            {/* ---------- Sticky Header ---------- */}
            <div className="sticky top-0 z-20 bg-neutral-950 border-b border-neutral-800 px-4 py-3">
                <h1 className="text-lg font-semibold">
                    🇮🇳 Indian Constitution Debate
                </h1>
                <p className="text-xs text-neutral-400">
                    Think • Debate • Understand
                </p>
            </div>

            {/* ---------- Messages ---------- */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`max-w-[80%] rounded-xl px-4 py-3
              ${msg.role === "user"
                                ? "ml-auto bg-blue-600 text-white"
                                : "mr-auto bg-neutral-900"
                            }`}
                    >
                        {msg.role === "ai" ? (
                            <AIResponse content={msg.content} />
                        ) : (
                            <pre className="whitespace-pre-wrap font-sans text-sm">
                                {msg.content}
                            </pre>
                        )}
                    </div>
                ))}

                {loadingStage === "thinking" && (
                    <div className="mr-auto bg-neutral-900 px-4 py-3 rounded-xl text-sm italic text-neutral-400">
                        Analyzing constitutional issue…
                    </div>
                )}
            </div>

            {/* ---------- Input ---------- */}
            <div className="border-t border-neutral-800 p-3">
                <div className="flex items-center gap-2 bg-neutral-900 rounded-lg px-3 py-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Enter your constitutional debate point…"
                        className="flex-1 bg-transparent outline-none text-sm text-neutral-100 placeholder:text-neutral-500"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!!loadingStage}
                        className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ---------- AI Renderer ---------- */
function AIResponse({ content }: { content: string }) {
    const sections = parseSections(content);
    const hasSections = Object.keys(sections).length > 0;

    if (!hasSections) {
        return (
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {content}
            </pre>
        );
    }

    return (
        <div className="space-y-3">
            {Object.entries(sections).map(([title, text]) => (
                <Section key={title} title={title} text={text} />
            ))}
        </div>
    );
}

/* ---------- Section Card ---------- */
function Section({ title, text }: { title: string; text: string }) {
    return (
        <div className="border border-neutral-700 rounded-lg bg-neutral-950 p-3">
            <div className="text-xs font-semibold text-neutral-400 mb-1">
                {title}
            </div>
            <div className="text-sm whitespace-pre-wrap leading-relaxed">
                {text.trim()}
            </div>
        </div>
    );
}
