import { Box, Button, colors } from "@mui/material";
import { TbBackground, TbSeparator } from "react-icons/tb";
import BotonMarcas from "../marcas/button";

interface CardProps {
  img: string;
  description: string;
}

export default function Card({ img, description }: CardProps) {
  return (
    <Box className="flex flex-col w-[120px] h-[290px] overflow-hidden bg-white md:w-[200px] md:h-[300px] shadow rounded">
      <Box className="w-full h-[100px] md:h-[120px]  flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt="Logo"
          className="w-[80%] h-full object-contain"
        />
      </Box>

      <hr className="w-full border-t border-gray-300 my-2" />

      <p className="text-[9px] sm:text-[10px] text-left px-2 line-clamp-4 break-words font-sans">
        {description}
      </p>

      <div className="flex flex-col items-center gap-1">
        <BotonMarcas BotonNombre="Leer más" />
        <BotonMarcas BotonNombre="Ver Productos" />
      </div>
    </Box>
  );
}