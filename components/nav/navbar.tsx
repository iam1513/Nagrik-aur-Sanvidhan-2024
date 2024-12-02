import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { NavbarItem } from "./navbar-item";
import { cn } from "@/data/lib/utils";

type Props = {
    className?: string;
}

export default function Navbar({ className }: Props) {
    return (
        <div
            className={cn(
                "flex w-full h-20 lg:fixed left-0 top-0 py-4 flex-row justify-between items-center bg-[#1C1F2B]",
                className
            )}
            style={{ zIndex: 100 }}
        >
            {/* Left-aligned section: Logo */}
            <div className="flex items-center pl-4 bg-white">
                Logo
            </div>

            {/* Center-aligned section: Navbar items */}
            <div className="flex flex-row gap-2">
                <NavbarItem label="Learn" href="/knowledge" iconSrc="/image.png" />
                <NavbarItem label="Courses" href="/courses" iconSrc="/image.png" />
                <NavbarItem label="Debate"
                    href="/debate"
                    iconSrc="/image.png" />
                <NavbarItem label="Discuss" href="/quests" iconSrc="/image.png" />
            </div>

            {/* Right-aligned section: User button */}
            <div className="flex items-center pr-4">
                <ClerkLoading>
                    <Loader className="h-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
}
