import Image from "next/image";


interface ComprasProps {
  titulo: string;
  descripcion: string;
  img: string;
}

export default function Article({titulo, descripcion, img}:ComprasProps) {
    return (

        <div className='flex flex-row justify-center gap-3 w-[100%]'>
            <article className='flex flex-col items-start w-[67%] h-[300px]'>
                <h3 className='font-semibold mb-3'>
                    {titulo}
                </h3>
                <div className=''>
                    <p className='text-justify text-[18px] line-clamp-7'>
                        {descripcion}
                    </p>
                </div>
                <button className='bg-blue-700 text-blue-50 rounded mt-2 mb-2 text-[20px] border-b-black flex'>Ver más</button>
            </article>
            <a href="" className=' justify-center mb-2 ml-2 bg-amber-50'>
                <Image src={img} width={150} height={200} alt="imagenes" />
            </a>
            
        </div>

    );
}