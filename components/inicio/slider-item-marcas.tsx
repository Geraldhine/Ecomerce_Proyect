interface SliderItemAsesoresProps {
  img: string;
  title: string;
  description: string;
}

export default function SliderItemMarcas({ img, title, description }: SliderItemAsesoresProps) {
  return (
    <div className="w-[17%] h-[100px] flex flex-col items-center overflow-hidden rounded-lg overflow-hidden ">
      <img src={img} alt="" className="w-full h-full object-contain" />
    </div>

  )
}