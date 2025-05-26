import Image from "next/image";
import Link from "next/link";


interface ComprasProps {
    id: string,
    titulo: string;
    descripcion: string;
    img: string;
}

export default function Article({id, titulo, descripcion, img }: ComprasProps) {
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

                <div >
                    {/* <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold text-sm rounded px-4 py-1 transition-colors duration-200 mt-3">
                        Ver más
                    </button> */}
                    <Link href={`/compras/comprasdetalle/${id}`} className="bg-blue-700 hover:bg-blue-300 text-white font-semibold text-sm rounded px-4 py-1 mt-3"></Link>
                </div>
            </article>
            <Link href={`/compras/comprasdetalle/${id}`} className='self-center-safe mb-2 w-1x4 object-center ml-10 '>
                <Image src={img} width={200} height={150} alt="imagenes" className="cursor-pointer animate-pulse duration-200" />
            </Link>

        </div>

    );
}