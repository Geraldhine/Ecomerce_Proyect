import { blogs } from "@/data/blogs/data";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) return <p>Blog no encontrado</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <img
        className="w-full h-40 object-cover rounded mb-2"
        src={blog.img}
        alt={blog.title}
      />
      <p>{blog.description}</p>

      <div className="flex justify-center mt-4">
      <Link href='/blogs' className="">Volver</Link>
      </div>


     
    </div>
  );
}

