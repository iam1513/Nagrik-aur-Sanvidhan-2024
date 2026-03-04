import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { SidebarMobileOnly } from "./sidebar-only-mobile";

export const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-[white]" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100] bg-inherit" side="left">
        <SidebarMobileOnly />
      </SheetContent>
    </Sheet>
  );
};
