import { Box, Button, colors } from "@mui/material";
import { TbBackground, TbSeparator } from "react-icons/tb";
import BotonMarcas from "../marcas/button";

interface CardProps {
  img: string;
  description: string;
}

export default function Card({ img, description }: CardProps) {
  return (
    <Box className="flex flex-col justify-start items-start w-[120px] h-[300px]  overflow-hidden bg-white">
      <Box className="flex flex-col justify-center items-center w-[100px] h-[70px]">  
        <img
          src={img}
          alt="Logo"
          className="w-full object-cover mb-2 self-center"
        />
      </Box>

      <hr className="w-full border-t border-gray-300 mb-3" />

      <p className="text-[11px] text-left line-clamp-5 break-words font-sans-serif">
        {description}
      </p>

      <div className=" flex flex-col ">
        <BotonMarcas BotonNombre="Leer más" />
        <BotonMarcas BotonNombre="Ver Productos" />
      </div>
    </Box>
  );
}
