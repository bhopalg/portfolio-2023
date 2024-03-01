import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { CERTIFICATIONS, FRAMEWORKS, LANGUAGES } from "@/common/constants";

export const metadata: Metadata = {
  title: "What I know - Gurps's Portfolio",
  description: "A list of technologies and tools I have experience with. As well as certifications and courses I have taken.",
  keywords: [
    CERTIFICATIONS.map((cert) => cert.name).join(", "),
    LANGUAGES.map((lang) => lang.name).join(", "),
    FRAMEWORKS.map((framework) => framework.name).join(", "),
  ],
};

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
