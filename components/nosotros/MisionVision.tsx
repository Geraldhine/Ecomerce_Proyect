
export default function MisionVision() {
    return (
        <div className="flex flex-col justify-center items-center text-start mt-4 mb-4  sm:flex-row sm:gap-12 lg:gap-20 ">
            <div className="flex flex-col justify-center items-start gap-4 sm:w-[auto] 
            sm:max-w-[400px] lg:max-w-[400px] "> 
                <h3 className="text-2xl font-bold mt-5 ">Visión</h3>
                <p className="text-[12px] font-[Montserrat,sans-serif]">
                    Brindar soluciones innovadoras de costura con tecnología de
                    vanguardia que impulsen el crecimiento competitividad de la
                    industria textil peruana expulsarla al mundo.
                </p>
                <h3 className="text-2xl font-bold ">Mision</h3>
                <p className="text-[12px] font-[Montserrat,sans-serif]">
                    Nuestra visión es ser reconocidos como el socio estratégico líder en
                    importación y distribución y comercialización de máquinas de coser
                    industriales de última tecnología en el Perú, superando las
                    expectativas del mercado con nuestra amplia gama de productos y
                    servicios, y así contribuir al fortalecimiento y crecimiento
                    sostenible de la industria textil en el país.
                </p>
            </div>

            <img className="w-[300px] h-[auto] sm:w-[250px] sm:h-[100px] lg:w-[500px] lg:h-[100px] "
                src="https://rab-import-assets.s3.amazonaws.com/rabImport/nosotros/4.jpg"
                alt=""
            />
        </div>
    )
}
