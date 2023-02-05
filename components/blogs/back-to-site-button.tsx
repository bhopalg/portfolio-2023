import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function BackToSiteButton() {
  return (
    <Link href="/" className="group block w-full flex-shrink-0">
      <div className="flex items-center">
        <div>
          <ArrowUturnLeftIcon className={"text-white h-5 w-5"} />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-white group-hover:text-gray-900">Back to site</p>
        </div>
      </div>
    </Link>
  );
}
