"use client";

import { useState } from "react";

export function useMobileHeaderTitle() {
  const [title, setMobileHeaderTitle] = useState<string>("Dashboard");

  const setTitle = (title: string) => {
    setMobileHeaderTitle(title);
  };

  return {
    title,
    setTitle,
  };
}
