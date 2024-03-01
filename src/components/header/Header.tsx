import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAVIGATION } from "@/common/constants";
import HeaderItem from "@/components/header/HeaderItem";

export default function Header() {
  return (
    <header className="px-5 py-5 w-full flex justify-end backdrop-blur bg-black/50 z-40 fixed top-0">
      <DropdownMenu>
        <Button asChild size="icon" aria-label="Open dropdown menu">
          <DropdownMenuTrigger>
            <MenuIcon />
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
