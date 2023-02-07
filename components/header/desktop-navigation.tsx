import { NAVIGATION } from "@/common/constants";
import { NavItem } from "@/components/header/nav-item";

export function DesktopNavigation(props: any) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {NAVIGATION.map(({ href, name }) => (
          <NavItem key={name} href={href}>
            {name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
