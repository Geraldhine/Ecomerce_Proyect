import Image from 'next/image';
import { IoLocation, IoCall } from 'react-icons/io5';

export default function ContactPage() {
    return (
        <section className='ml-20 mr-20'>
            <div className="flex ml-3 gap-3 justify-items-center-safe mt-4 mb-4">
                      <h2 className='text-[30px] font-bold flex justify-start justify-items-center gap-2 mt-3 mb-3 ml-3'>
                          <Image src="https://i.postimg.cc/K4XMy5gb/icon-contactanos.png" width={40} height={40} alt="icono" />
                         Contactos
                      </h2>
                    </div>
            <div className='flex grid-cols-2 items-center'>
                <div className="bg-white p-8 rounded shadow-md max-w-xl w-full mx-auto justify-center">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Envianos un mensaje</h2>

                    <form action="#" method="POST">

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombres</label>
                                <input type="text" id="firstName" name="nombres" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
                                <input type="text" id="lastName" name="apellidos" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="Celular" className="block text-sm font-medium text-gray-700">Celular</label>
                                <input type="text" id="celular" name="celular" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea id="descripcion" name="description" className="mt-1 p-2 w-full border rounded-md" placeholder="Escribe tu mensaje" />
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="bg-blue-300 p-8 rounded shadow-md max-w-full mx-auto">
                    <h2 className="text-2x1 font-semibold mb-3 justify-self-start">Tiendas en Lima</h2>

                    <a className="flex gap-4" href="">
                        <IoLocation className='text-[20px]' />
                        <p className='text-[20px]'>Prolongación Huanuco 1933,
                            <br />La Victoria - Lima </p>

                    </a>
                    <a className="flex gap-4 mb-3 mt-3" href="">
                        <IoCall />
                        <p className='text-[20px]'> (+51) 998 323 402</p>
                    </a>

                    <hr />

                    <a className="flex gap-1 mt-3" href="">
                        <IoLocation />
                        <p>Prolongación Huanuco 1933,
                            <br />La Victoria - Lima </p>

                    </a>
                    <a className="flex gap-1 mb-3 mt-3" href="">
                        <IoCall />
                        <p> (+51) 998 323 402</p>
                    </a>
                    <hr />
                    <a className="flex gap-1 mt-3" href="">
                        <IoLocation />
                        <p>Prolongación Huanuco 1933,
                            <br />La Victoria - Lima </p>

                    </a>
                    <a className="flex gap-1 mb-3 mt-3" href="">
                        <IoCall />
                        <p> (+51) 998 323 402</p>
                    </a>
                    <hr />
                    <h2 className="text-2x1 font-semibold justify-self-start mb-3 mt-6">Tiendas en Arequipa</h2>
                    <a className="flex gap-1 mt-3" href="">
                        <IoLocation />
                        <p>Prolongación Huanuco 1933,
                            <br />La Victoria - Lima </p>

                    </a>
                    <a className="flex gap-1 mb-3 mt-3" href="">
                        <IoCall />
                        <p> (+51) 998 323 402</p>
                    </a>
                    <hr />
                    <a className="flex gap-1 mt-3" href="">
                        <IoLocation />
                        <p>Prolongación Huanuco 1933,
                            <br />La Victoria - Lima </p>
                    </a>
                    <a className="flex gap-1 mb-3 mt-3" href="">
                        <IoCall />
                        <p> (+51) 998 323 402</p>
                    </a>

                </div>
            </div>
        </section>

    )
}
