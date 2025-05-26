import { IoLogoWhatsapp } from "react-icons/io5";

interface SliderItemProps {
  img?: string;
  title?: string;
  description?: string;
}

export default function SliderItemAsesores({ img, title, description }: SliderItemProps) {
  return (
    <div className=" flex flex-col justify-center items-center bg-white w-[170px]">
      <img src={img} alt="" />
      <div className="  flex flex-col mt-2 mb-2 text-center text-[13px]">
        <div className="bg-sky-300">
            <p className=" font-bold">{title}</p>
        </div>
        <div className="flex justify-center items-center mt-2 mb-2 gap-1">
        <IoLogoWhatsapp className="text-[20px] text-green-600" />
            <p className="text-[10px]">{description}</p>
        </div>
      </div>
    </div>
  )
}



