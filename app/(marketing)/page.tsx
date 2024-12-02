import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 ">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 ">
        {/* fill is for width and height */}
        <Image src="/image.png" fill alt="Hero" />
      </div>
      <div className="text-xl lg:text-3xl ">
        <h1 className="text-xl lg:text-2xl font-bold text-neutral-600 max-w-[480px] text-center pb-6 ">
        Dive into the
            world of 'Nagrik Aur Samvidhan' and explore your rights and duties
            in a fun, accessible way!        </h1>

        <div className="flex flex-col  justify-center items-center gap-y-3 max-w-[330px] w-full pl-10 ">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton

              // SORT THIS OUT

              // mode="modal"
              // afterSignInUrl="/learn"
              // afterSignOutUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I Already Have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <SignInButton>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <Link href="/home">Continue Learning</Link>
                </Button>
              </SignInButton>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
