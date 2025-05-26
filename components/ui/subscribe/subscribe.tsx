import { FaBell } from 'react-icons/fa';
import BotonSuscribete from './button';
import { TbBackground } from 'react-icons/tb';
import { colors } from '@mui/material';

export default function Subscribe() {
    return (
        <>
            <hr />
            <div className="flex flex-col items-center justify-center w-full h-52 ">
                <div className="flex flex-row items-center justify-center gap-2">
                    <FaBell size={40} color='ligthblue'/>
                    <p className="font-bold text-2xl to-blue-900">Suscríbete</p>
                </div>
                <p className="mt-2 text-sm">Recibe nuestras últimas actualizaciones</p>
                <div className="flex flex-row gap-2 mt-3px-2 py-1 rounded">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-52 h-9 px-2 text-sm border border-black rounded focus:outline-none text-black"
                    />
                    <BotonSuscribete BotonSubscribete="Suscríbete" />
                </div>
            </div>
        </>
    );
}
