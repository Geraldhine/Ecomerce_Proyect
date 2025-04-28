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
        <header className={` flex justify-between items-center bg-gray-200 rounded gap-2
            sm:flex sm:justify-between 
            md:flex md:justify-around
            lg:flex lg:justify-between 
            text-white`}
        >

            <div className="flex">
                <img className="h-20  w-[150px] sm:w-[150px] md:w-[150px] lg:w-[150px]" src="/assets/logo.jpg" alt="Logo" />
            </div>

            <div className="flex-1 flex justify-center mt-4  ">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-white text-emerald-700 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[500px] text-[10px] rounded-md p-2 h-[30px]"
                />
            </div>
            <div className=" flex justify-end items-center gap-2  mt-4 sm:gap-4 md:gap-6 lg:gap-10">
                <div className=" items-center gap-2 hidden sm:hidden md:flex lg:flex">
                    <EnvelopeIcon className="w-6 h-6 text-black" />
                    <p className="text-[12px] text-black">ecomerce@gmail.com</p>
                </div>

                <div className="flex gap-3 items-center justify-center bg-blue-300 w-full h-12 rounded-l-2xl p-2">
                    <ShoppingCartIcon className="w-8 h-6 text-black" />
                    <UserCircleIcon className="w-8 h-6 text-black" />
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    );
}
