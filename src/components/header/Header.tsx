import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HOVER_EFFECTS_CLASSNAMES, NAVIGATION } from "@/common/constants";
import HeaderItem from "@/components/header/HeaderItem";
import { cn } from "@/lib";
import DesktopNav from "@/components/header/DesktopNav";

export default function Header() {
  return (
    <header className="relative">
      <DesktopNav />
      <DropdownMenu>
        <Button
          asChild
          size="icon"
          aria-label="Open dropdown menu"
          className={cn(
            "hover:bg-transparent hover:border-zinc-50 hover:border group top-3 fixed right-3 sm:hidden z-50",
            HOVER_EFFECTS_CLASSNAMES,
          )}
        >
          <DropdownMenuTrigger>
            <MenuIcon className={cn("group-hover:text-zinc-50", HOVER_EFFECTS_CLASSNAMES)} />
          </DropdownMenuTrigger>
        </Button>
        <DropdownMenuContent>
          {NAVIGATION.map((item) => (
            <HeaderItem {...item} key={item.name} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
