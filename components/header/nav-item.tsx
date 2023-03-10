import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx("relative block px-3 py-2 transition", isActive ? "text-light-blue-300" : "hover:text-light-blue-300")}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-light-blue-500/0 via-light-blue-500/40 to-light-blue-500/0" />
        )}
      </Link>
    </li>
  );
}
