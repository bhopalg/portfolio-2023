import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface ItemProp {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface UsesListProps {
  title: string;
  description: string;

  items: ItemProp[];
}

function Title({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>;
}

function Description({ description }: { description: string }) {
  return <p className="mt-4 text-lg leading-8 text-gray-400">{description}</p>;
}

function Item({ item }: { item: ItemProp }) {
  const { name, description, imageUrl, link } = item;

  return (
    <li className="bg-zinc-800 ring-1 ring-zinc-300/20 py-10 px-8 rounded-xl">
      <Image width={192} height={192} className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={imageUrl} alt={name} />
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{name}</h3>
      <p className="text-sm leading-6 text-gray-400">{description}</p>
      <ul className="mt-6 flex justify-center gap-x-6">
        <li>
          <a href={link} className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">{name} Link</span>
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </li>
  );
}

function ItemList({ items }: { items: ItemProp[] }) {
  return (
    <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
}

export function UsesList({ title, description, items }: UsesListProps) {
  return (
    <div className="bg-zinc-900 ring-1 ring-zinc-300/20 rounded-xl py-10">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="text-left">
          <Title title={title} />
          <Description description={description} />
        </div>
        <ItemList items={items} />
      </div>
    </div>
  );
}
