import Header from "@/components/ui/header/header";
import { Navbar } from "@/components/ui/navbar/Navbar";
import Subscribe from "@/components/ui/subscribe/subscribe";


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Navbar />

      <div className="text-2xl text-center mr-3 ml-3">

        {children}
      </div>
    
    <Subscribe />
      {/* <Footer/> */}
    </>


  );
}