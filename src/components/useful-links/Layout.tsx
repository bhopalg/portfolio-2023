"use client";

import { useMobileHeaderTitleContext } from "@/components/sidenav/context/MobileHeaderTittleContextProvider";
import { useEffect } from "react";
import UsefulLinks from "@/app/mdx/useful-links.mdx";

export default function UsefulLinksLayout() {
  const { setTitle } = useMobileHeaderTitleContext();

  useEffect(() => {
    setTitle("Useful Links");
  }, [setTitle]);

  return <UsefulLinks />;
}
