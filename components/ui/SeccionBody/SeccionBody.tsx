

interface SeccionBodyProps {
  img: string;
  palabra1: string;
  palabra2: string;
}

export default function SeccionBody({ img, palabra1, palabra2 }: SeccionBodyProps) {
  return (

    <div className="flex flex-row gap-3  text-[19px] sm:text-[23px] "> 
        <img className="w-[28px]" src={img} alt="Nuestras Marcas" />
        <div className="flex flex-row gap-2 ">
          <p className="text-blue-600 font-extrabold ">{palabra1}</p>
          <p className="font-extrabold ">{palabra2}</p>
        </div>
    </div>
  );
}
