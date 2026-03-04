"use client";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import {
    Home,
    BookOpen,
    GraduationCap,
    Gavel,
    MessageSquare,
    Loader,
} from "lucide-react";
import { NavbarItem } from "./navbar-item";
import { cn } from "@/data/lib/utils";

type Props = {
    className?: string;
};

export default function Navbar({ className }: Props) {
    return (
        <div
            className={cn(
                "flex w-full h-20 lg:fixed left-0 top-0 py-4 flex-row justify-between items-center bg-[#1C1F2B]",
                className
            )}
            style={{ zIndex: 100 }}
        >
            {/* LOGO */}
            <div className="flex items-center pl-4 font-bold text-white">
                Citizens & Constitution
            </div>

            {/* NAV ITEMS */}
            <div className="flex flex-row gap-2">
                <NavbarItem label="Home" href="/home" icon={Home} />
                <NavbarItem label="Learn" href="/knowledge" icon={BookOpen} />
                <NavbarItem label="Courses" href="/courses" icon={GraduationCap} />
                <NavbarItem label="Debate" href="/debate" icon={Gavel} />
                <NavbarItem label="Discuss" href="/quests" icon={MessageSquare} />
            </div>

            {/* USER */}
            <div className="flex items-center pr-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-gray-400 animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
}
