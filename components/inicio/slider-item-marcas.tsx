interface SliderItemAsesoresProps {
  img: string;
  title: string;
  description: string;
}

export default function SliderItemMarcas({ img, title, description }: SliderItemAsesoresProps) {
  return (
    <div className="w-full h-auto flex-col justify-center items-center bg-white rounded-lg ">
      <img src={img} alt="" />
    </div>
  )
}