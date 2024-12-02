import { MobileSideBar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-20 flex items-center bg-[#1C1F2B] border-b fixed top-0 w-full z-50">
      <MobileSideBar />
    </nav>
  );
};
