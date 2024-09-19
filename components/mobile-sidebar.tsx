import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";

export const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white-500" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100] bg-inherit" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
