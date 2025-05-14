import Image from 'next/image';
import { IoLocation, IoLogoWhatsapp, IoLocationOutline, IoCallOutline } from 'react-icons/io5';


export default function ShopPage() {
  return (
    <div>
        <div className="flex ml-3 gap-3 justify-items-center-safe mb-2">
          <IoLocation className="text-blue-900 text-[30px]"/>
          <h1 className="font-bold text-blue-900 text-[30px]"> Nuestras Tiendas</h1>
        </div>

        <div className="grid grid-cols-3  bg-blue-100 rounded mr-3 ml-3 mt-3 mb-3">
          <div className='flex-1/2'> 
              {/* falta flex */}
              <div className='mt-4 justify-self-center-safe mb-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.433066417118!2d-75.20834752780034!3d-12.069003794696803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e974427d3f3cf%3A0x3e3e792d3d81009d!2sMaquinas%20Rua!5e0!3m2!1ses-419!2spe!4v1612628114484!5m2!1ses-419!2spe" 
                        width={350} height={210} aria-hidden="false" 
                ></iframe>
              </div>
          </div>
          <div className='justify-self-center-safe mt-4 mb-4'>
              
          </div>
          <div>
              <h2 className="block justify-self-start font-semibold text-blue-900 ml-4 mt-3">Tienda</h2>

              <a className="flex ml-4 items-center mt-3" href="">
                <IoLocationOutline />
                <p className="text-[18px] ml-3"> Jr. Huanuco 1933. La Victoria (cerca
                  <br /> cruce con la av. Isabel La Catolica)
                </p>
              </a>

              <a className="flex gap-1 mt-3 items-center ml-4" href="">
                <IoCallOutline />
                <p className="text-[18px] ml-3">(01) 323 5313 / (01) 474 1422</p>
              </a>

              <a className="flex gap-1 mt-3 items-center ml-4 mb-3" href="">
                <IoLogoWhatsapp />
                <p className="text-[18px] ml-3 mt-3">(+51) 998 323 404</p>
              </a>
          </div>
        </div>
        
        <div className="grid grid-cols-3  bg-blue-100 rounded mr-3 ml-3 mt-3 mb-3">
          <div>
              <div className='mt-4 justify-self-center-safe mb-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.433066417118!2d-75.20834752780034!3d-12.069003794696803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e974427d3f3cf%3A0x3e3e792d3d81009d!2sMaquinas%20Rua!5e0!3m2!1ses-419!2spe!4v1612628114484!5m2!1ses-419!2spe" 
                        width={350} height={210} aria-hidden="false" 
                ></iframe>
              </div>
          </div>
          <div className='justify-self-center-safe mt-4 mb-4'>
              {/* <Image src={'https://i.postimg.cc/PxTDFhbm/rab-1.jpg'} alt='imagen' width={350} height={100}></Image> */}
          </div>
          <div>
              <h2 className="block justify-self-start font-semibold text-blue-900 ml-4 mt-3">Tienda</h2>

              <a className="flex ml-4 items-center mt-3" href="">
                <IoLocationOutline />
                <p className="text-[18px] ml-3"> Jr. Huanuco 1933. La Victoria (cerca
                  <br /> cruce con la av. Isabel La Catolica)
                </p>
              </a>

              <a className="flex gap-1 mt-3 items-center ml-4" href="">
                <IoCallOutline />
                <p className="text-[18px] ml-3">(01) 323 5313 / (01) 474 1422</p>
              </a>

              <a className="flex gap-1 mt-3 items-center ml-4 mb-3" href="">
                <IoLogoWhatsapp />
                <p className="text-[18px] ml-3 mt-3">(+51) 998 323 404</p>
              </a>
          </div>
        </div>

      </div>
  )
}
