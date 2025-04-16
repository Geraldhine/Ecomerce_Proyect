
import { ShoppingCartIcon, UserCircleIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <header className="flex flex-1 justify-between items-center   bg-gray-100">
            <div>
                <img className="h-30 w-auto" src="/assets/logo.jpg" alt="Logo" />
            </div>

            <div className="flex-1 flex justify-center ">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-white rounded-full p-4 w-1/2 w-10/12"/>
            </div>
            <div className='flex gap-20 items-center justify-center'>
                <div className='flex gap-3'>
                    <EnvelopeIcon className="w-6 h-6 text-black" />
                    <p className='text-[14px]'>ecomerce@gmail.com</p>
                </div>
                <div className="flex gap-3 items-center justify-center bg-blue-300 w-40 h-15 rounded-l-2xl">
                    <ShoppingCartIcon className="w-8 h-6 text-black" />
                    <UserCircleIcon className="w-8 h-6 text-black" />
                </div>
            </div>


        </header>
    );
}
