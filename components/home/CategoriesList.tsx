import { categories } from "@/utils/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Link from "next/link";

export default function CategoriesList({
  category,
  search,
}: {
  category: string;
  search: string;
}) {
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <section>
      <ScrollArea className='py-6'>
        <div className='flex gap-x-4'>
          {categories.map((c) => {
            const isActive = c.label === category;
            return (
              <Link key={c.label} href={`/?category=${c.label}${searchTerm}`}>
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100%] ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  <c.icon className='w-8 h-8' />
                  <p className='capitalize text-sm mt-1'>{c.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  );
}
