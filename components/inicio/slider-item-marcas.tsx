interface SliderItemAsesoresProps {
  img: string;
  title: string;
  description: string;
}

export default function SliderItemMarcas({ img, title, description }: SliderItemAsesoresProps) {
  return (
    <div className="  h-[100px] w-[170px]  flex flex-col items-center overflow-hidden rounded-lg overflow-hidden ">
      <img src={img} alt="" className=" h-full object-contain" />
    </div>

  )
}