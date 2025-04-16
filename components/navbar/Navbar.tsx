import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa"

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 p-3  rounded">
      <div className="flex flex-row text-1xl gap-9 margin-left-10 text-[13px] text-white font-bold">
        <a className="mr-2" href="/inicio">Inicio</a>
        <a className="mr-2" href="/nosotros">Nosotros</a>
        <a className="mr-2" href="/marcas">Marcas</a>
        <a className="mr-2" href="/productos">Productos</a>
        <a className="mr-2" href="/compras">¿Que comprar</a>
        <a className="mr-2" href="/tiendas">Tiendas</a>
        <a className="mr-2" href="/blogs">Blogs</a>
        <a className="mr-2" href="/contactanos">Contactanos</a>
      </div>
      <div className="flex ">
        <div className=" ml-40 flex gap-3 text-[17px]">
          <FaWhatsapp className="text-white" /><p className="text-[13px] text-amber-50 ">+51 985 678 345</p>
          <FaTiktok className="text-white" />
          <FaInstagram className="text-white" />
          <FaYoutube className="text-white" />
          <FaFacebook className="text-white" />
        </div>
      </div>


    </nav>
  )
}
