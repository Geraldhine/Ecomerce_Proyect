import { MapIcon, PhoneArrowDownLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <footer >
            <section style={{backgroundImage: 'url("https://rab-import-assets.s3.amazonaws.com/rabImport/footer/fondo-footer.jpg")', backgroundColor: '#000000', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div>
                    <div>
                        <a href="">
                            <img src={'https://rab-import-assets.s3.amazonaws.com/rabImport/footer/rab-footer.jpg'} alt='logo'></img>
                        </a>
                        <p>42 años a su servicio, siempre con la mejor garantía en máquinas de coser y bordadoras.
                            <br />Síguenos y entérate de nuestras ultimas noticias en nuestras redes sociales.
                        </p>
                        <div>
                            <a href="https://www.facebook.com/rabimport.pe/" >f</a>
                            <a href="https://www.youtube.com/@rabimportpe" >y</a>
                            <a href="https://www.tiktok.com/@rabimport.pe" >t</a>
                            <a href="https://www.instagram.com/rabimport/" >i</a>
                        </div>
                    </div>
                    <div>
                        <h3>Tienda en Lima</h3>
                        <a href="">
                            <MapIcon className='"w-5 h-5'/>
                            <i>Jr. Huánuco 1933, La Victoria, Lima</i>
                        </a>
                        <a href="">
                            <PhoneArrowDownLeftIcon className='"w-5 h-5'/>
                            <i>(+51) 989 594 565 </i>
                        </a>
                        <a href="">
                            <MagnifyingGlassIcon className='"w-5 h-5'/>
                            <i>ventas@rabimport.com </i>
                        </a>
                        <h3>Tienda en Lima</h3>
                        <a href="">
                            <MapIcon className='"w-5 h-5'/>
                            <i>Jr. Huánuco 1915, La Victoria, Lima</i>
                        </a>
                        <a href="">
                            <PhoneArrowDownLeftIcon className='"w-5 h-5'/>
                            <i>(+51) 998 327 905 </i>
                        </a>
                        <a href="">
                            <MagnifyingGlassIcon className='"w-5 h-5'/>
                            <i>ventas@rabimport.com </i>
                        </a>
                        <h3>Tienda en Lima</h3>
                        <a href="">
                            <MapIcon className='"w-5 h-5'/>
                            <i>Jr. Huánuco 1644, La Victoria, Lima</i>
                        </a>
                        <a href="">
                            <PhoneArrowDownLeftIcon className='"w-5 h-5'/>
                            <i>(+51) 998 323 404 </i>
                        </a>
                        <a href="">
                            <MagnifyingGlassIcon className='"w-5 h-5'/>
                            <i>ventas@rabimport.com </i>
                        </a>
                    </div>
                    {/* <div >
                        <h3>Tienda en Arequipa</h3>
                        <a href="">
                            <MapIcon />
                            <i>Ca. San Camilo 401-D, Cercado, Lima</i>
                        </a>
                        <a href="">
                            <PhoneArrowDownLeftIcon/>
                            <i>(+51) 994 271 017 </i>
                        </a>
                        <a href="">
                            <MagnifyingGlassIcon/>
                            <i>ventas@rabimport.com </i>
                        </a>
                        <h3>Tienda en Arequipa</h3>
                        <a href="">
                            <MapIcon/>
                            <i>Ca. San Camilo 401-D, Cercado, Lima</i>
                        </a>
                        <a href="">
                            <PhoneArrowDownLeftIcon/>
                            <i>(+51) 994 271 017 </i>
                        </a>
                        <a href="">
                            <MagnifyingGlassIcon/>
                            <i>ventas@rabimport.com </i>
                        </a>
                        <div>
                            <img src={'https://rab-import-assets.s3.amazonaws.com/certificaciones-rabimport.jpg'} alt='imagen' width={250} height={100}></img>
                        </div>
                    </div> */}
                </div>
            </section>
            <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                <p>&copy; 2023 RAB Import - Todos los derechos reservados</p>
                <img src="https://summerlove.lat/img/logo/desarrollado-por-summerlove.png" alt="Logo" width={50} height={50}></img>
            </div>
        </footer>
    );
}