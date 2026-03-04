"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import {
  Loader,
  BookOpen,
  Gavel,
  Brain,
  Users,
  Scale,
  Landmark,
  FileText,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

/* ---------------- Animation ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex-1 w-full bg-neutral-950 text-neutral-100">
      <div className="max-w-[1200px] mx-auto px-6 py-12 space-y-8">

        {/* ================= HERO ================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Nagrik Aur Samvidhan
            </span>
          </h1>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            A modern civic-tech platform to understand the Indian Constitution
            through stories, debates, and constitutional reasoning.
          </p>

          <AuthButtons />
        </motion.section>

        {/* ================= CORE FEATURES ================= */}
        <SectionHeading
          title="Core Features"
          subtitle="Learn the Constitution the right way"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            icon={<BookOpen />}
            title="Story-Based Learning"
            desc="Articles explained using everyday situations instead of legal jargon."
            accent="text-blue-400"
          />
          <FeatureCard
            icon={<Gavel />}
            title="AI-Powered Debates"
            desc="Structured arguments, counter-arguments, and balanced conclusions."
            accent="text-violet-400"
          />
          <FeatureCard
            icon={<Brain />}
            title="Judicial Thinking"
            desc="Develop constitutional reasoning instead of rote memorization."
            accent="text-emerald-400"
          />
        </div>

        {/* ================= LEARNING MODULES ================= */}
        <SectionHeading
          title="What You Will Learn"
          subtitle="Complete constitutional coverage"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <InfoCard
            icon={<Landmark />}
            title="Foundations"
            desc="Preamble, values, citizenship, sovereignty."
          />
          <InfoCard
            icon={<Scale />}
            title="Rights & Duties"
            desc="Fundamental Rights, Duties, and limitations."
          />
          <InfoCard
            icon={<FileText />}
            title="Institutions"
            desc="Parliament, Executive, Judiciary, and bodies."
          />
          <InfoCard
            icon={<Sparkles />}
            title="Living Constitution"
            desc="Judicial interpretation and evolution."
          />
          <InfoCard
            icon={<Users />}
            title="Federal Structure"
            desc="Centre–State relations and governance."
          />
          <InfoCard
            icon={<Brain />}
            title="Constitutional Ethics"
            desc="Liberty, equality, justice, fraternity."
          />
        </div>

        {/* ================= HOW IT WORKS ================= */}
        <SectionHeading
          title="How Learning Works"
          subtitle="Conversation-driven, not chapter-driven"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StepCard step="01" title="Ask Anything">
            Ask doubts, opinions, or real-life scenarios.
          </StepCard>
          <StepCard step="02" title="AI Analyzes">
            The system identifies the constitutional issue involved.
          </StepCard>
          <StepCard step="03" title="Balanced Insight">
            You receive clarity, debate, and conclusions.
          </StepCard>
        </div>

        {/* ================= SAMPLE CONTENT ================= */}
        <SectionHeading
          title="How a Typical Question Is Answered"
          subtitle="Not just answers — reasoning"
        />

        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900 space-y-3 text-sm">
          <p>
            <span className="text-neutral-300 font-medium">Question:</span>{" "}
            Should freedom of speech have limits?
          </p>
          <p className="text-neutral-400">
            The system begins with a real-life scenario, cites Article 19,
            presents arguments supporting liberty, counters them with public
            order concerns, and concludes with constitutional balance.
          </p>
        </div>

        {/* ================= WHO IS THIS FOR ================= */}
        <SectionHeading
          title="Who Is This Platform For?"
          subtitle="Built for real people"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AudienceCard
            icon={<Users />}
            title="Students & Aspirants"
            desc="UPSC, Judiciary, Law, and civics learners."
          />
          <AudienceCard
            icon={<Scale />}
            title="Everyday Citizens"
            desc="Understand rights, duties, and democracy."
          />
        </div>

        {/* ================= CTA ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center space-y-3"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Start Thinking Constitutionally
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A stronger democracy begins with informed citizens.
          </p>
          <AuthButtons />
        </motion.section>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function FeatureCard({ icon, title, desc, accent }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="border border-neutral-800 rounded-xl p-5 bg-neutral-900"
    >
      <div className={`${accent} mb-3`}>{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-neutral-400">{desc}</p>
    </motion.div>
  );
}

function InfoCard({ icon, title, desc }: any) {
  return (
    <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900">
      <div className="flex items-center gap-3 mb-2 text-violet-400">
        {icon}
        <h3 className="font-medium text-neutral-200">{title}</h3>
      </div>
      <p className="text-sm text-neutral-400">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, children }: any) {
  return (
    <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900">
      <div className="text-xs text-neutral-500 mb-1">STEP {step}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-neutral-400">{children}</p>
    </div>
  );
}

function AudienceCard({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 border border-neutral-800 rounded-xl p-5 bg-neutral-900">
      <div className="text-emerald-400">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-neutral-400">{desc}</p>
      </div>
    </div>
  );
}

function SectionHeading({ title, subtitle }: any) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <p className="text-neutral-500">{subtitle}</p>
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[420px]">
        <ClerkLoading>
          <Loader className="h-4 w-4 animate-spin text-neutral-400 mx-auto" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedOut>
            <SignUpButton>
              <Button
                size="lg"
                variant="secondary"
                className="w-full"
              >
                Get Started For Free
              </Button>
            </SignUpButton>

            <SignInButton>
              <Button
                size="lg"
                variant="primaryOutline"
                className="w-full"
              >
                I Already Have an Account
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Button
              size="lg"
              variant="secondary"
              className="w-full"
              asChild
            >
              <Link href="/home">Continue Learning</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
