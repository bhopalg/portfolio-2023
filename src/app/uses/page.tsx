import { SimpleLayout } from "@/components/SimpleLayout";
import { USES_LIST } from "@/common/constants";
import { DesktopUsesList } from "@/components/uses/DesktopList";
import { MobileList } from "@/components/uses/MobileList";
import { Metadata } from "next";

const TITLE = "Tools, IDEs, and Workstation Items I Use ";
const DESCRIPTION =
  "Discover the tools, integrated development environments (IDEs), and workstation items that I use to be productive and efficient in my work. From text editors and version control systems to hardware and accessories, find out what helps me get things done. Whether you're a software developer, a designer, or simply interested in optimizing your workspace, this page offers insights and recommendations based on my experience. Learn about popular software such as Visual Studio Code, IntelliJ IDEA, and Sublime Text, as well as lesser-known but powerful utilities like Alfred and f.lux. Explore the hardware and gadgets that I rely on, such as ergonomic keyboards, high-resolution monitors, and noise-cancelling headphones. Get inspired and upgrade your own toolkit with the tools and resources that I trust.";
const KEYWORDS = [
  "Tools",
  "IDEs",
  "Workstation",
  "Text editors",
  "Version control systems",
  "Hardware",
  "Accessories",
  "Productivity",
  "Efficiency",
  "Software development",
  "Design",
  "Workspace",
  "Visual Studio Code",
  "IntelliJ IDEA",
  "IntelliJ Pycharm",
  "IntelliJ DataGrip",
  "Sublime Text",
  "Alfred",
  "f.lux",
  "Ergonomic keyboards",
  "Monitors",
  "Headphones",
  "Gadgets",
  "Recommendations",
  "Logitech",
  "Logitech MX Master 3",
  "Logitech MX Keys",
  "iPad mini",
  "MacBook Pro M1 Pro",
  "Hermen Miller Embody",
  "Standing desk",
  "iPhone",
  "LG HDR 4K Display",
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.join(", "),
};

export default function Page() {
  return (
    <SimpleLayout title={TITLE} intro={""} isHScreenRequired={false}>
      <div className={"flex flex-col gap-10"}>
        {USES_LIST.map(({ title, description, items }) => (
          <div key={title}>
            <span className={"md:block hidden"}>
              <DesktopUsesList items={items} title={title} description={description} />
            </span>
            <span className={"md:hidden block"}>
              <MobileList items={items} title={title} description={description} />
            </span>
          </div>
        ))}
      </div>
    </SimpleLayout>
  );
}
