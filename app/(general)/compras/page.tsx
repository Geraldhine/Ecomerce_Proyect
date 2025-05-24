import Article from '@/components/compras/article'
import { compras } from '@/data/quecomprar/compras'
import Image from 'next/image'
import React from 'react'



export default function ComprasPage() {
  return (
    <div className="text-2xl">
      <section className='ml-20 mr-20'>
        <h2 className='text-[30px] font-bold flex justify-start justify-items-center gap-2 mt-4 mb-4'>
          <Image src="https://i.postimg.cc/qBKYP0Jp/12-que-comprar.png" width={40} height={40} alt="icono" />
          <span className='text-blue-700'>¿Qué</span> comprar?
        </h2>
        <div className='' style={{ width: "100%" }}>
          <h2 className='font-bold flex text-start mb-2 text-[30px]'>
            ¿Tenías dudas sobre cuál es la máquina ideal para tu confección? ¡Esta página fue creada para ti!
          </h2>

          <p className='text-justify mb-3 text-[18px]'>Una de las mayores dificultades para las empresas que se dedican a la fabricación de productos
            es saber exactamente qué máquina es la indicada para cada operación de costura.
            Existen cientos de modelos y especificaciones que influyen directamente en el resultado final
            del producto fabricado. Con eso en mente, hemos creado esta página donde reunimos los artículos
            fabricados y sugerimos el equipo adecuado para cada operación.
          </p>

          <div className='grid grid-cols-1 mt-4 '>
            {compras.map((article, index) =>(
              <Article key={index} titulo={article.titulo} descripcion={article.descripcion} img={article.img} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
