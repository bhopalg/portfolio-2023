import { Container } from "@/components/Container";
import { ReactNode } from "react";
import clsx from "clsx";

interface SimpleLayoutProps {
  title: string;
  intro: string;
  isHScreenRequired?: boolean;
  children: ReactNode;
}

export function SimpleLayout({ title, intro, children, isHScreenRequired = true }: SimpleLayoutProps) {
  return (
    <Container className={clsx(isHScreenRequired && "h-screen", "mt-16 sm:mt-32")}>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base text-zinc-400">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
