import { FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';


export default function Card({ img, UbacionTienda, Direccion, Telefono, WhastApp }: Card) {
    return (
        <>
        
        <div className="flex flex-col w-[210px] h-[220px] border-gray-600 border-2 overflow-hidden p-2 md:w-[250px] md:h-[260px] lg:w-[270px] lg:h-[280px]">
            <img className="w-full h-[100px] object-cover" src={img} alt="" />

            <h3 className="text-[13px] font-semibold mt-2">{UbacionTienda}</h3>

            <div className="flex flex-col justify-start gap-1 mt-2 text-[12px]">
                <div className="flex items-start gap-1">
                    <FiMapPin className="min-w-[16px]" />
                    <p className="break-words">{Direccion}</p>
                </div>
                <div className="flex items-start gap-1">
                    <FiPhone className="min-w-[16px]" />
                    <p className="break-words">{Telefono}</p>
                </div>
                <div className="flex items-start gap-1">
                    <FaWhatsapp className="min-w-[16px]" />
                    <p className="break-words">{WhastApp}</p>
                </div>
            </div>
        </div>
        </>

    );
}

interface Card {
    img: string;
    UbacionTienda: string;
    Direccion: string;
    Telefono: string;
    WhastApp: string;
}
