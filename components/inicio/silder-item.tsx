import { IoLogoWhatsapp } from "react-icons/io5";

interface SliderItemProps {
  img?: string;
  title?: string;
  description?: string;
}

export default function SliderItemAsesores({ img, title, description }: SliderItemProps) {
  return (
    <div className=" w-[180px] justify-center items-center bg-white ">
      <img src={img} alt="" />
      <div className=" mt-2 mb-2 text-center text-[13px]">
        <div className="bg-sky-300">
            <p className=" font-bold">{title}</p>
        </div>
        <div className="flex justify-center items-center mt-2 mb-2 gap-1">
        <IoLogoWhatsapp className="text-[20px] text-green-600" />
            <p className="text-[12px]">{description}</p>
        </div>
      </div>
    </div>
  )
}



