"use client";

import Navbar from "@/components/nav/navbar";
import { motion } from "framer-motion";
import {
    Users,
    ShieldCheck,
    CheckCircle,
    ScrollText,
    Landmark,
    Gavel,
    AlertTriangle,
    GraduationCap,
    Scale,
    BookOpen,
    FileText,
    History,
} from "lucide-react";

/* ------------------ animation presets ------------------ */

const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

/* ------------------ page ------------------ */

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="bg-[#121212] text-[#b3b3b3]">

                {/* ================= HERO ================= */}
                <section className="px-6 py-20 text-center">
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl font-bold text-white mb-3"
                        >
                            Citizens & Constitution
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="max-w-3xl mx-auto text-base md:text-lg"
                        >
                            A civic learning platform to understand the Constitution of India —
                            its philosophy, institutions, rights, duties, and democratic impact.
                        </motion.p>
                    </motion.div>
                </section>

                {/* ================= CORE IDEAS ================= */}
                <section className="px-6 py-12">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {[
                            {
                                title: "Democracy",
                                icon: Users,
                                desc: "Power flows from citizens through constitutional structures.",
                                meta: "Popular Sovereignty",
                                color: "amber",
                            },
                            {
                                title: "Fundamental Rights",
                                icon: ShieldCheck,
                                desc: "Civil liberties protecting dignity and freedom.",
                                meta: "Articles 12–35",
                                color: "blue",
                            },
                            {
                                title: "Fundamental Duties",
                                icon: CheckCircle,
                                desc: "Moral obligations supporting national unity.",
                                meta: "Article 51A",
                                color: "emerald",
                            },
                            {
                                title: "Rule of Law",
                                icon: Scale,
                                desc: "Law governs both State and citizens equally.",
                                meta: "Judicial Review",
                                color: "violet",
                            },
                        ].map(({ title, icon: Icon, desc, meta, color }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                                className="bg-[#1a1a1a] border border-white/10 rounded-xl p-5 transition"
                            >
                                <Icon
                                    className={`h-5 w-5 mb-2
                    ${color === "amber" && "text-amber-400"}
                    ${color === "blue" && "text-blue-400"}
                    ${color === "emerald" && "text-emerald-400"}
                    ${color === "violet" && "text-violet-400"}
                  `}
                                />
                                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                                <p className="text-sm mb-2">{desc}</p>
                                <div className="text-xs text-gray-500">{meta}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ================= CONSTITUTION AT A GLANCE ================= */}
                <section className="px-6 py-12">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg font-semibold text-white text-center mb-6"
                    >
                        Constitution at a Glance
                    </motion.h2>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {[
                            ["Articles", "448", "Substantive provisions"],
                            ["Parts", "25", "Thematic structure"],
                            ["Schedules", "12", "Administrative details"],
                            ["Amendments", "105+", "Living Constitution"],
                        ].map(([label, value, note], i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -3 }}
                                className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4"
                            >
                                <div className="text-xs uppercase text-gray-400 mb-1">{label}</div>
                                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                                <p className="text-xs text-gray-500">{note}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ================= FRAMEWORK ================= */}
                <section className="px-6 py-12">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg font-semibold text-white text-center mb-6"
                    >
                        Constitutional Framework
                    </motion.h2>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {[
                            { label: "Preamble", icon: ScrollText, note: "Ideals & values" },
                            { label: "Rights", icon: ShieldCheck, note: "Civil liberties" },
                            { label: "DPSPs", icon: BookOpen, note: "State guidance" },
                            { label: "Duties", icon: CheckCircle, note: "Citizen role" },
                            { label: "Union", icon: Landmark, note: "Central authority" },
                            { label: "States", icon: Users, note: "Federalism" },
                            { label: "Judiciary", icon: Gavel, note: "Guardian" },
                            { label: "Emergency", icon: AlertTriangle, note: "Crisis powers" },
                        ].map(({ label, icon: Icon, note }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -3 }}
                                className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4"
                            >
                                <Icon className="h-4 w-4 text-blue-400 mb-2" />
                                <h3 className="text-white text-sm font-semibold mb-1">{label}</h3>
                                <p className="text-xs text-gray-500">{note}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ================= LEARNING EXPERIENCE ================= */}
                <section className="px-6 py-12">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg font-semibold text-white text-center mb-6"
                    >
                        How Learning Happens
                    </motion.h2>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {[
                            {
                                title: "Concept First",
                                desc: "Understand constitutional intent before legal text.",
                                icon: GraduationCap,
                            },
                            {
                                title: "Plain Language",
                                desc: "Simplified explanations for all backgrounds.",
                                icon: FileText,
                            },
                            {
                                title: "Case Law",
                                desc: "Learn through landmark Supreme Court judgments.",
                                icon: Gavel,
                            },
                            {
                                title: "Historical Context",
                                desc: "Why Articles were framed the way they were.",
                                icon: History,
                            },
                        ].map(({ title, desc, icon: Icon }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -3 }}
                                className="bg-[#1a1a1a] border border-white/10 rounded-xl p-5"
                            >
                                <Icon className="h-5 w-5 text-amber-400 mb-2" />
                                <h3 className="text-white text-sm font-semibold mb-1">{title}</h3>
                                <p className="text-sm">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ================= FOOTER ================= */}
                <footer className="border-t border-white/10 px-6 py-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-white font-semibold mb-2">
                                    Citizens & Constitution
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Building constitutional literacy for an informed democracy.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold text-sm mb-3">Learn</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>Preamble</li>
                                    <li>Fundamental Rights</li>
                                    <li>DPSPs</li>
                                    <li>Fundamental Duties</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold text-sm mb-3">Explore</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>Union Government</li>
                                    <li>State Government</li>
                                    <li>Judiciary</li>
                                    <li>Emergency Provisions</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold text-sm mb-3">
                                    Constitution
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>Adopted: 26 Nov 1949</li>
                                    <li>In Force: 26 Jan 1950</li>
                                    <li>Lengthiest written constitution</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-white/10 my-8" />

                        <div className="text-center text-xs text-gray-500">
                            © {new Date().getFullYear()} Citizens & Constitution • Justice • Liberty • Equality • Fraternity
                        </div>
                    </motion.div>
                </footer>

            </main>
        </>
    );
}
