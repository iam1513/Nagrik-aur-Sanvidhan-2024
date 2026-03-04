import { Header } from "./header";
import { Footer } from "./footer";
type Props = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center bg-[#121212]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
