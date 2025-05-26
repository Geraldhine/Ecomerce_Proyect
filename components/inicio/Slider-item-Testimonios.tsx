import { UserCircleIcon } from "@heroicons/react/24/solid";

interface SliderItemTestimoniosProps {
  title: string;
  description: string;
}

export default function SliderItemTestimonios({ title, description }: SliderItemTestimoniosProps) {
  return (

    <div className="flex flex-col flex-wrap items-center text-center w-[190px] sm:w-[300px]  bg-white rounded-lg  ">
      <UserCircleIcon className="w-16 h-16 text-sky-300" />
      <div className="w-full">
        <p className=" text-[13px] font-bold ">{title}</p>
      </div>
      <div className="mt-2 mb-2">
        <p className="text-[12px] line-clamp-3  ">{description}</p>
      </div>

    </div>

  )
}