import { UserCircleIcon } from "@heroicons/react/24/solid";

interface SliderItemTestimoniosProps {
  title: string;
  description: string;
}

export default function SliderItemTestimonios({ title, description }: SliderItemTestimoniosProps) {
  return (
    <div className="flex  items-center text-center w-dvh flex-col  bg-white rounded-lg ">
      <UserCircleIcon className="w-16 h-16 text-sky-300" />
      <div className="w-full">
        <p className=" text-[13px] font-bold ">{title}</p>
      </div>
      <div className="mt-2 mb-2">
        <p className="text-[12px] line-clamp-4  ">{description}</p>
      </div>

    </div>

  )
}