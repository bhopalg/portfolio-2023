import "@/styles/globals.css";
import "@code-hike/mdx/dist/index.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full bg-black overflow-x-hidden">{children}</body>
    </html>
  );
}
