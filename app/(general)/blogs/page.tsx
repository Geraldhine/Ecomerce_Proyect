"use client";
import { useState } from "react";
import SeccionBody from "@/components/ui/SeccionBody/SeccionBody";
import Card from "@/components/blogs/card";
import { blogs as allBlogs } from "@/data/blogs/data";

const categorias = [ "NOTICIAS", "TECNOLOGIA", "MODA", "ENTREVISTAS"];

export default function BlogsPage() {

  const [categoriaActiva, setCategoriaActiva] = useState("NOTICIAS");
  const blogsFiltrados =
  categoriaActiva === "" ? allBlogs : allBlogs.filter((blog) => blog.categoria === categoriaActiva);


  return (
    <>
      <div className="flex  gap-[90px] justify-center items-center">
        <SeccionBody
          img="https://www.rabimport.com/image/icon-categorias.png"
          palabra1="Nuestros"
          palabra2="blogs"
        />
        <nav>
          <ul className="flex flex-wrap gap-3">
            {categorias.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setCategoriaActiva(cat)}
                  className={`text-[10px] font-bold cursor-pointer ${
                    categoriaActiva === cat
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-wrap ml-7 gap-3">
        {blogsFiltrados.length === 0 ? (
          <p className="text-sm text-gray-600">No hay blogs en esta categoría.</p>
        ) : (
          blogsFiltrados.map((blog, index) => (
            <Card
              id={blog.id}
              key={index}
              img={blog.img}
              date={blog.date}
              title={blog.title}
              description={blog.description}
            />
          ))
        )}
      </div>
    </>
  );
}