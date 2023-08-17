"use client";

import { useUsefulLinks } from "@/components/useful-links/hooks/useUsefulLinks";
import Link from "next/link";
import { clsx } from "clsx";
import { categoryList } from "@/models/Category";
import { useMemo, useState } from "react";

export default function UsefulLinks() {
  const { data, isLoading, error } = useUsefulLinks();

  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    if (selectedCategoryList.length === 0) {
      return data ?? [];
    }

    if (!data) {
      return [];
    }

    return data.filter((item) => {
      return selectedCategoryList.some((category: any) => item.categories?.includes(category));
    });
  }, [data, selectedCategoryList]);

  if (isLoading) {
    return (
      <ul className="list-disc max-w-sm animate-pulse px-4 sm:px-6 lg:px-8">
        <li className="mb-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
        </li>
        <li className="mb-2">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </li>
        <li>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </li>
      </ul>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="pb-4 flex flex-row flex-wrap gap-2">
        {categoryList.map((category) => (
          <button
            onClick={() => {
              if (selectedCategoryList.includes(category)) {
                setSelectedCategoryList(selectedCategoryList.filter((item) => item !== category));
              } else {
                setSelectedCategoryList([...selectedCategoryList, category]);
              }
            }}
            type="button"
            key={`${category}`}
            className={clsx(
              "inline-flex items-center rounded-md bg-gray-400/10 hover:bg-gray-400/20 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20 transition-colors duration-300 ease-in-out",
              selectedCategoryList.includes(category) && "bg-gray-400/20",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="list-disc px-4 sm:px-6 lg:px-8">
        {filteredData.map(({ id, name, link, categories }) => (
          <li className="my-2 text-zinc-50" key={id}>
            <div className={clsx(categories && " gap-2 py-2 flex flex-col")}>
              <Link href={link} target={"_blank"} className="text-zinc-50">
                {name}
              </Link>
              <div className="flex flex-row flex-wrap gap-2 max-w-2xl w-full">
                {categories?.map((category: string) => (
                  <span
                    key={`${category}-${id}-${name}`}
                    className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
