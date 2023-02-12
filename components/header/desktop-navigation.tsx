import { NAVIGATION } from "@/common/constants";
import { NavItem } from "@/components/header/nav-item";

export function DesktopNavigation(props: any) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
        {NAVIGATION.map(({ href, name }) => (
          <NavItem key={name} href={href}>
            {name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
