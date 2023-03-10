import { ItemProp, UsesListProps } from "@/components/uses/uses.model";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

function Title({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>;
}

function Description({ description }: { description: string }) {
  return <p className="mt-4 text-lg leading-8 text-gray-400">{description}</p>;
}

function Item({ item, inView }: { item: ItemProp; inView: boolean }) {
  const { name, description, link, transitionDelay } = item;

  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div
        className={classNames(
          {
            "opacity-0 blur-lg": !inView,
            "opacity-100 blur-none": inView,
          },
          `transition-all duration-700 ease-in-out ${transitionDelay ? `${transitionDelay}` : ""}`
        )}
      >
        <h3 className="text-lg font-semibold text-white text-left">{name}</h3>
        <p className="mb-4 text-base font-normal text-gray-400 pt-3 text-left">{description}</p>
        <div className={"flex"}>
          <a
            href={link}
            target={"_blank"}
            rel={"noreferrer"}
            className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Learn more <ArrowLongRightIcon className="w-3 h-3 ml-2" />
          </a>
        </div>
      </div>
    </li>
  );
}

function List({ items, inView }: { items: ItemProp[]; inView: boolean }) {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {items.map((item) => (
        <Item item={item} key={item.name} inView={inView} />
      ))}
    </ol>
  );
}

export function MobileList({ title, description, items }: UsesListProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="bg-zinc-900 ring-1 ring-zinc-300/20 rounded-xl py-10" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="text-left pb-5">
          <Title title={title} />
          <Description description={description} />
        </div>
        <List items={items} inView={inView} />
      </div>
    </div>
  );
}
