import { IoCall, IoLocation, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoYoutube, IoMail } from 'react-icons/io5';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <footer>
      <section className='flex backdrop-grayscale ml-0' 
        style={{
        backgroundImage: 'url("https://i.postimg.cc/6p0YkN0L/fondo-footer.jpg")', 
        backgroundColor: '#000000',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'}}>

        <div className='flex justify-between text-slate-50 gap-8 mb-2'>
          <div className='flex flex-1 gap-2 flex-col justify-items-normal text-center ml-3 mt-2' >
            <a className='flex gap-1 justify-center mt-2' href="">
              <Image className='rounded' src={'https://i.postimg.cc/Lsvf49Yv/logo.jpg'} alt='logo' width={100} height={100}></Image>
            </a>
            <p className='text-[14px]'>42 años a su servicio, siempre con la mejor garantía en máquinas de coser y bordadoras.
              <br />Síguenos y entérate de nuestras ultimas noticias en nuestras redes sociales.
            </p>
            <div className='flex col-auto gap-2 justify-center'>
              
              <a href="https://www.facebook.com/rabimport.pe/" >
              <IoLogoFacebook/>
              </a>
              <a href="https://www.youtube.com/@rabimportpe" >
              <IoLogoYoutube/>
              </a>
              <a href="https://www.tiktok.com/@rabimport.pe" >
              <IoLogoTiktok/>
              </a>
              <a href="https://www.instagram.com/rabimport/" >
              <IoLogoInstagram/>
              </a>
            </div>
          </div>
          <div className='justify-between mt-2'>

            <h3 className='font-bold text-blue-500 text-[25px]'>Tienda en Lima</h3>
            <a className='flex gap-1 mt-3' href="">
              <IoLocation className='text-blue-400'/>
              <p className='text-[15px]'>Jr. Huánuco 1933, La Victoria, Lima</p>
            </a>
            <a className='flex gap-1 mt-3' href="">
             <IoCall className='text-blue-400'/>
              <p className='text-[14px]'>(+51) 989 594 565 </p>
            </a>
            <a className='flex gap-1 mt-3' href="">
              <IoMail className='text-blue-400'/>
              <p className='text-[14px]'>ventas@rabimport.com </p>
            </a>

            <h3 className='font-bold text-blue-500 text-[25px] mt-3'>Tienda en Lima</h3>
            <a className='flex gap-1 mt-3' href="">
              <IoLocation className='text-blue-400'/>
              <p className='text-[14px]'>Jr. Huánuco 1915, La Victoria, Lima</p>
            </a>
            <a className='flex gap-1 mt-3' href="">
              <IoCall className='text-blue-400'/>
              <p className='text-[14px]'>(+51) 998 327 906 </p>
            </a>
            <a className='flex gap-1 mt-3' href="#">
              <IoMail className='text-blue-400'/>
              <p className='text-[14px]'>ventas@rabimport.com </p>
            </a>

            <h3 className='font-bold text-blue-500 mt-3 text-[25px]'>Tienda en Lima</h3>
            <a className='flex gap-1 mt-3' href="">
              <IoLocation className='text-blue-400'/>
              <p className='text-[14px]'>Jr. Huánuco 1644, La Victoria, Lima</p>
            </a>
            <a className='flex gap-1 mt-3' href="">
              <IoCall className='text-blue-400'/>
              <p className='text-[14px]'>(+51) 998 323 405 </p>
            </a>
            <a className='flex gap-1 mb-2 mt-3' href="">
              <IoMail className='text-blue-400'/>
              <p className='text-[14px]'>ventas@rabimport.com </p>
            </a>
          </div>
          <div className='mt-2'>
            <h3 className='font-bold text-blue-500 text-[25px]'>Tienda en Arequipa</h3>
            <a className='flex gap-1 mt-3' href="">
              <IoLocation className='text-blue-400'/>
              <p className='text-[14px]'>Ca. San Camilo 401-D, Cercado, Lima</p>
            </a>
            <a className='flex gap-1 mt-3' href="">
              <IoCall className='text-blue-400'/>
              <p className='text-[14px]'>(+51) 994 271 017 </p>
            </a>
            <a className='flex gap-1 mt-3' href="">
              <IoMail className='text-blue-400'/>
              <p className='text-[14px]'>ventas@rabimport.com </p>
            </a>
            <h3 className='font-bold text-blue-500 text-[25px] mt-2'>Tienda en Arequipa</h3>
            <a className='flex gap-1 mt-3' href="">
              <IoLocation className='text-blue-400'/>
              <p className='text-[14px]'>Ca. San Camilo 401-D, Cercado, Lima</p>
            </a>
            <a className='flex gap-1 mt-3' href="">
             <IoCall className='text-blue-400'/>
              <p className='text-[14px]'>(+51) 994 271 017 </p>
            </a>
            <a className='flex gap-1 mt-3' href="">
              <IoMail className='text-blue-400'/>
              <p className='text-[14px]'>ventas@rabimport.com </p>
            </a>
            <div className='justify-items-center mt-3'>
              <Image className='rounded' src={'https://i.postimg.cc/9fQJVNg3/certificaciones-rabimport.jpg'} alt='imagen' width={250} height={250}></Image>
            </div>
          </div>
        </div>
      </section>
      
      <div className='flex gap-2 justify-center mt-2 mb-2 bg-amber-50'>
        <p>&copy; 2023 RAB Import - Todos los derechos reservados</p>
        <Image src="https://i.postimg.cc/59mSfMcj/rua-final.png" alt="Logo" width={70} height={60}></Image>
      </div>
      
    </footer>
    );
}