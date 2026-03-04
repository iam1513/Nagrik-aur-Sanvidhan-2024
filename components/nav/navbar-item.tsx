"use client";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
    label: string;
    icon: LucideIcon;
    href: string;
};

export const NavbarItem = ({ label, icon: Icon, href }: Props) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className="justify-start h-[52px]"
            asChild
        >
            <Link href={href} className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span>{label}</span>
            </Link>
        </Button>
    );
};
