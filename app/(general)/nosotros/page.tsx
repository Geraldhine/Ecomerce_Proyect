import type { Metadata } from "next";
import SeccionBody from "@/components/ui/SeccionBody/SeccionBody";
import ImagenEmpresa from "@/components/nosotros/ImagenEmpresa";
import ColecionImages from "@/components/nosotros/ColecionImages";
import MisionVision from "@/components/nosotros/MisionVision";
import Card from "@/components/nosotros/Card";
import { CardInfo } from "../../../data/nosotrosPage/CardInfo";
import { Key } from "react";

export const metadata: Metadata = {
  description: "Contact Page",
  keywords: ["contact", "page", "nextjs"],
  authors: [{ name: "Geraldhine" }],
};

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col mr-[10px] ml-[10px] sm:mr-[10px] sm:ml-[10px] md:mr-[40px] md:ml-[40px] lg:mr-[50px] lg:ml-[50px]">
        <div>
          <SeccionBody
            img="https://www.rabimport.com/image/10-nosotros.png"
            palabra1="Nuestra"
            palabra2="empresa"
          />
        </div>

        <div>
          <ImagenEmpresa />
        </div>
        <div>
          <ColecionImages />
        </div>
        <div>
          <MisionVision />
        </div>
        <div>
        <h3 className="text-2xl font-bold mt-5 text-center">¿Dónde estamos?</h3>
        </div>
        <div className="flex flex-wrap justify-center  mt-4 gap-10  sm:gap-8 md:gap-8 lg:gap-10">
          {CardInfo.map(
            (
              CardInfo: {
                img: string;
                UbacionTienda: string;
                Direccion: string;
                Telefono: string;
                WhastApp: string;
              },
              index: Key | null | undefined
            ) => (
              <Card
                key={index}
                img={CardInfo.img}
                UbacionTienda={CardInfo.UbacionTienda}
                Direccion={CardInfo.Direccion}
                Telefono={CardInfo.Telefono}
                WhastApp={CardInfo.WhastApp}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
