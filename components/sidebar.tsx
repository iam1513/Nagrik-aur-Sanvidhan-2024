import Image from "next/image";
import Link from "next/link";
import { SideBarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { cn } from "@/data/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  // Give fix position to resolve the issue of sidebar and learn
  //  We fixed the sidebar as we dont have to move it even after scrolling
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      {/* <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/image.png" height={40} width={40} alt="mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            CnC
          </h1>
        </div>
      </Link> */}


      <div className="flex flex-col gap-y-2 flex-1">
        {/* <SideBarItem label="Learn" href="/knowledge" iconSrc="/image.png" /> */}
        <SideBarItem label="Quiz" href="/learn" iconSrc="/image.png" />
        <SideBarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/image.png"
        />
        <SideBarItem label="Quests" href="/quests" iconSrc="/image.png" />
        <SideBarItem label="Shop" href="/shop" iconSrc="/image.png" />
      </div>

      {/* <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div> */}
    </div>
  );
};
