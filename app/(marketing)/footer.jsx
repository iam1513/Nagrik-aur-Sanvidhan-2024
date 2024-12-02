import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    // Hidden ensures that footer is not visible
    // lg:blcok ensures that its visible after we have a large screen
    <footer className="hidden lg:block h-20 w-ful p-2 bg-[#1C1F2B]">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/image.png"
            height={32}
            width={40}
            alt="Fundamental Rights"
            className="mr-4 rounded-md"
          />
          Rights
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/image.png"
            height={32}
            width={40}
            alt="Fundamental Rights"
            className="mr-4 rounded-md"
          />
          Rights
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/image.png"
            height={32}
            width={40}
            alt="Fundamental Rights"
            className="mr-4 rounded-md"
          />
          Rights
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/image.png"
            height={32}
            width={40}
            alt="Fundamental Rights"
            className="mr-4 rounded-md"
          />
          Rights
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/image.png"
            height={32}
            width={40}
            alt="Fundamental Rights"
            className="mr-4 rounded-md"
          />
          Rights
        </Button>
      </div>
    </footer>
  );
};
