import { blogs } from "@/data/blogs/data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}


export default function Page({ params }: PageProps) {
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) return notFound();

  return (
    <div className="p-5 bg-amber-50 flex flex-col items-center text-center mr-[40px] ml-[40px]">
      <h1 className="text-xl font-bold mb-2 ">{blog.title}</h1>

      <img
        className="w-[80%] h-[60%] sm:w-[50%] sm:h-[40%]  object-cover rounded mb-2"
        src={blog.img}
        alt={blog.title}
      />

      <p className="text-[12px] mb-4 text-justify max-w-[700px]">
        {blog.description}
      </p>


      <div className="flex justify-center">
        <Link href="/blogs" className="text-blue-500 underline">
          Volver
        </Link>
      </div>
    </div>

  );
}

export async function generateStaticParams() {
  return blogs.map((b) => ({
    id: b.id.toString(),
  }));
}
