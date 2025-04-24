"use client";import Link from "next/link"

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { text } from "stream/consumers";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="md:hidden text-white">
                {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>

            {isOpen && (
                <div className="absolute top-12 right-0 bg-gray-100 text-black rounded-lg shadow-lg p-4 z-10 flex flex-col gap-2">
                    <Link className="mr-2" href="/inicio">Inicio</Link>
                    <Link className="mr-2" href="/productos">Productos</Link>
                    <Link className="mr-2" href="/compras">¿Que comprar</Link>
                    <Link className="mr-2" href="/nosotros">Nosotros</Link>
                    <Link className="mr-2" href="/tiendas">Tiendas</Link>
                    <Link className="mr-2" href="/marcas">Marcas</Link>
                    <Link className="mr-2" href="/blogs">Blogs</Link>
                    <Link className="mr-2" href="/contactanos">Contactanos</Link>
                </div>
            )}
        </div>
    );
}
