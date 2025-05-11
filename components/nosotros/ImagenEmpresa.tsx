export default function ImagenEmpresa() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-12">
            <div className="relative w-[400px] h-[360px] flex-shrink-0">
                <div className="absolute  w-full h-full bg-yellow-400 z-0"></div>
                <img
                    src="https://rab-import-assets.s3.amazonaws.com/rabImport/nosotros/1.jpg"
                    alt="Edificio RAB"
                    className=" top-6 left-6 relative z-10 w-full h-full  shadow-md"
                />
            </div>
            <div className="max-w-2xl text-[12px]">
                <h2 className="text-2xl font-bold mb-4">Nosotros</h2>
                <p className="mb-4 font-[Montserrat,sans-serif]">
                    Somos una empresa peruana con más de 40 años de experiencia en la importación,
                    distribución y comercialización de máquinas de coser industriales de última
                    tecnología para la industria textil, confecciones y calzado del Perú.
                </p>
                <p className="mb-4 font-[Montserrat,sans-serif]">
                    Ofrecemos soluciones integrales de costura con asesoría especializada, impulsando
                    al sector en la mejora de los procesos y el uso de las tecnologías smart-digitales.
                    Nuestro compromiso es brindar productos de calidad, junto a las mejores marcas de
                    maquinarias del mundo. Somos representantes oficiales de: SIRUBA, JACK, JUKI, SWF,
                    RIKEA, HO-HSING, BULLMER, MAICA, VIBEMAC, entre otros.
                </p>
                <p className="font-[Montserrat,sans-serif]">
                    Gracias a ello podemos darle el mejor respaldo con la mejor garantía de los productos
                    y así establecer relaciones duraderas con nuestros clientes acompañándolos en su
                    crecimiento y en la mejora continua de la industria textil.
                </p>
            </div>
        </div>
    );
}
