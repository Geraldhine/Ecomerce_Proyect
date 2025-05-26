import Footer from "@/components/footer/footer";
import Header from "@/components/ui/header/header";
import { Navbar } from "@/components/ui/navbar/Navbar";
import Subscribe from "@/components/ui/subscribe/subscribe";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Navbar />

      <div className=" bg-gray-50   ">

        {children}
        <Subscribe />
      </div>
      <Footer/>
    </>


  );
}