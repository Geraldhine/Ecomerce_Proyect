import { ShoppingCartIcon, UserCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import SiderBar from './SiderBar';
import { MinusIcon } from '@heroicons/react/24/outline';
import HamburgerMenu from './SiderBar';

const MostrarMenuDesplegable = () => {
    return (
        <SiderBar />
    );
}

export default function Header() {
    return (
        <header className={` sticky flex justify-between items-center bg-gray-200 rounded gap-4 
            sm:flex sm:justify-between 
            md:flex md:justify-around
            lg:flex lg:justify-between 
            text-white `}
        >
            <div className="flex">
                <img className="h-25 bg-amber-50 rounded-r-full w-[160px] " src="/assets/logoCompleto.png" alt="Logo" />
            </div>

            <div className="flex-1 flex justify-center  ">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-white text-emerald-700 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[500px] text-[10px] rounded-md p-2 h-[40px]"
                />
            </div>
            <div className=" flex justify-end items-center gap-1 sm:gap-4 md:gap-6 lg:gap-10">
                <div className=" items-center gap-2 hidden sm:hidden md:flex lg:flex">
                    <EnvelopeIcon className="w-6 h-6 text-black" />
                    <p className="text-[12px] text-black">ecomerce@gmail.com</p>
                </div>

                <div className="flex gap-3 items-center justify-center bg-gradient-to-tl from-blue-400 to-blue-800 w-full h-12 rounded-l-2xl  g-1">
                    <ShoppingCartIcon className="w-8 h-6" />
                    <UserCircleIcon className="w-8 h-6 " />
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    );
}
