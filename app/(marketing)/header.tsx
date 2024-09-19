import React from "react"; // If needed
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
        {/* LOGO */}
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/image.png" height={40} width={40} alt="mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            CnC
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
