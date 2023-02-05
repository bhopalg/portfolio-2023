import { XMarkIcon } from "@heroicons/react/24/outline";

export function MobileMenuCloseButton({ setSidebarOpen }: { setSidebarOpen: (value: boolean) => void }) {
  return (
    <div className="absolute top-0 right-0 -mr-12 pt-2">
      <button
        type="button"
        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={() => setSidebarOpen(false)}
      >
        <span className="sr-only">Close sidebar</span>
        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    </div>
  );
}
