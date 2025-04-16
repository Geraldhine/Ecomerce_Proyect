import { Navbar } from "@/components";
import Header from "@/components/header/header";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header />
    <Navbar />
    
      <div className="text-2xl text-center">
        <p>This is the layout aninado.</p>
        {children}
      </div>
    </>


  );
}