import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.6,
          messages: [
            {
              role: "system",
              content: `
You are an expert on the Indian Constitution.

VERY IMPORTANT THINKING RULE:
First, analyze the user's query and decide the appropriate response depth:
- If the user asks for a brief explanation, definition, or "why was it introduced", give a SHORT, DIRECT answer.
- If the user asks for analysis, debate, opinion, or comparison, give a structured debate-style response.
- Do NOT force a template when a simple explanation is sufficient.

GENERAL RULES:
- Stay strictly within the Indian Constitution.
- Be accurate, concise, and context-aware.
- Do NOT repeat unnecessary sections.
- Do NOT over-explain when not asked.

WHEN a debate or deep analysis IS REQUIRED, use this format:

📖 Story:
(short relevant scenario)

📜 Constitutional Basis:
(relevant Articles / cases)

⚖️ Argument:
(main constitutional reasoning)

🧠 Counter-Argument:
(opposing constitutional view)

✅ Conclusion:
(balanced takeaway)

WHEN a simple explanation is sufficient:
- Respond in plain paragraphs
- Keep it brief and focused
- No fixed headings required

Do NOT mention being an AI.
`

            },
            {
              role: "user",
              content: query,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error:", errorText);
      return NextResponse.json(
        { error: "Groq API failed" },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      reply: data?.choices?.[0]?.message?.content ?? "No response",
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
