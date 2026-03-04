import { MobileHeader } from "@/components/mobile-header";
import Navbar from "@/components/nav/navbar";
import { Sidebar } from "@/components/sidebar";


type props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: props) => {
  return (
    <>
      <MobileHeader />
      <Navbar className="hidden lg:flex" />
      <main className=" min-h-screen pt-[50px] lg:pt-0 mt-20 bg-[#121212]">
        <div className="max-w-[1056px] mx-auto pt-6 h-full bg-[#121212]">{children}</div>
      </main>

    </>
  );
};

export default MainLayout;
