"use client";

import { createContext, ReactNode, useContext } from "react";
import { useMobileHeaderTitle } from "@/components/sidenav/hooks/useMobileHeaderTitle";

export interface MobileHeaderTitleContextValue {
  title: string;
  setTitle: (title: string) => void;
}

export const MobileHeaderTitleContext = createContext<MobileHeaderTitleContextValue>({
  title: "",
  setTitle: () => {},
});

export default function MobileHeaderTitleContextProvider({ children }: { children: ReactNode }) {
  const props = useMobileHeaderTitle();
  return <MobileHeaderTitleContext.Provider value={{ ...props }}>{children}</MobileHeaderTitleContext.Provider>;
}

export function useMobileHeaderTitleContext() {
  const context = useContext(MobileHeaderTitleContext);

  if (context === undefined) {
    throw new Error("useMobileHeaderTitleContext must be used within a MobileHeaderTitleContextProvider");
  }

  return context;
}
