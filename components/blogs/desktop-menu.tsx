import { BackToSiteButton } from "@/components/blogs/back-to-site-button";
import { Navigation } from "@/components/blogs/navigation";
import { PostMetadata } from "@/lib/use-get-posts";

export function DesktopMenu({ navigation, isLoading }: { navigation: PostMetadata[]; isLoading: boolean }) {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-400 border-r-2 bg-dark-blue-200">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <Navigation navigation={navigation} isLoading={isLoading} />
        </div>
        <div className="flex flex-shrink-0 border-t border-gray-400 p-4">
          <BackToSiteButton />
        </div>
      </div>
    </div>
  );
}
