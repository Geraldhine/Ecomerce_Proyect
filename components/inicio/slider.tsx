"use client";
import { jsx } from "react/jsx-runtime";
import SliderItem from "./silder-item";
import { JSX, useState } from "react";
import SliderItemTestimonios from "./Slider-item-Testimonios";
import SliderItemMarcas from "./slider-item-marcas";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";


interface SliderProps{
  arreglo: Array<any>;
  tipo: "asesores" | "marcas" | "testimonios";
}

export default function Slider<T extends { img: string; title: string ,description:string}>({ arreglo, tipo }: SliderProps) {
  const renderItem = (item: T, index: number) => {
    switch (tipo) {
      case "asesores":
        return (
          <SliderItem
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        );
      case "marcas":
        return (
          <SliderItemMarcas
            key={index}
            img={item.img}
            title={item.title}
            description=""
          />
        );
      case "testimonios":
        return (
          <SliderItemTestimonios
            key={index}
            title={item.title}
            description={item.description}
          />
        );
      default:
        return null;
    }
  };
  const [imagenActual, setImagenActual] = useState(0);
  const total = arreglo.length;
  let cantidad = 5;
  if (tipo === "testimonios") {
    cantidad = 3;
  }

  

  const nextImage = () => {
    setImagenActual((prev) => (prev + cantidad) % total);
  };

  const prevImage = () => {
    setImagenActual((prev) => {
      const nuevo = prev - cantidad;
      return nuevo < 0 ? (total - cantidad + (nuevo % total)) % total : nuevo;
    });
  };

  const obtenerImagenes = () => {
    const imgs = [];
    for (let i = 0; i < cantidad; i++) {
      imgs.push(arreglo[(imagenActual + i) % total]);
    }
    return imgs;
  };

  return (
    <div className="w-full mt-8 mb-8 flex flex-col relative ">
      <div className="flex gap-4 justify-center">
        {obtenerImagenes().map((item, index) =>
          renderItem(item, (imagenActual + index) % total)
        )}
      </div>
      
        <IoArrowBack  className="mt-2 flex justify-center gap-[10px] text-[30px] absolute top-1/2" onClick={nextImage}/>
        <IoArrowForward  className="mt-2 flex justify-center gap-[10px] text-[30px]  absolute  top-1/2 right-0" onClick={prevImage}/>
   
    </div>
  );
}
