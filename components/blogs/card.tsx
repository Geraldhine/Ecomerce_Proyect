
import Link from 'next/link';
export default function Card({ id, img, date, title, description }: { id:number ,img: string; date: string; title: string; description: string }) {
  return (
    <div className="w-[50%] max-w-sm h-auto bg-amber-50 p-4 border mt-5 border-gray-300 text-[11px] font-sans overflow-hidden">
      <img className="w-full h-40 object-cover rounded mb-2" src={img} alt={title} />
      <p className="text-gray-500 text-xs mb-1">{date}</p>
      <h3 className="text-base font-semibold mb-1">{title}</h3>
      <p className="line-clamp-2 break-words text-sm">{description}</p>
      <Link href={`/blogs/pageDetalle/${id}`} className="mt-2 text-blue-600 font-bold text-xs">Leer más</Link>
    </div>
  );
}