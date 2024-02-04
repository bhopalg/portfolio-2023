"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function ErrorReloadButton() {
  const router = useRouter();

  return <Button onClick={() => router.refresh()}>Reload</Button>;
}
