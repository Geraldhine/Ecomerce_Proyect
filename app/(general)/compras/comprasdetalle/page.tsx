import Image from 'next/image'
import React from 'react'

interface Props {
    id: string,
    titulo: string,
    descripcion: string,
    img: string,
    img2: string,
    img3: string,
}

export const page = ({ id, titulo, descripcion, img, img2, img3 }: Props) => {
    return (
        <section className='ml-20 mr-20'>
            <div className=''>
                <article>
                    <h2 className='font-bold flex text-start mb-2 text-[30px]'>
                        ¿Tenías dudas sobre cuál es la máquina ideal para tu confección? ¡Esta página fue creada para ti!
                    </h2>

                    <p className='text-justify mb-3 text-[18px]'>Una de las mayores dificultades para las empresas que se dedican a la fabricación de productos
                        es saber exactamente qué máquina es la indicada para cada operación de costura.
                        Existen cientos de modelos y especificaciones que influyen directamente en el resultado final
                        del producto fabricado. Con eso en mente, hemos creado esta página donde reunimos los artículos
                        fabricados y sugerimos el equipo adecuado para cada operación.
                    </p>
                    <div>
                        <div>
                            <Image src="" width={40} height={40} alt='polo1'/>
                        </div>
                        <div>
                            <Image src="" width={40} height={40} alt='polo2'/>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
