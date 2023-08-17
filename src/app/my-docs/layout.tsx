import { ReactNode } from "react";
import SideNavLayout from "@/components/sidenav/Layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <SideNavLayout>{children}</SideNavLayout>;
}
