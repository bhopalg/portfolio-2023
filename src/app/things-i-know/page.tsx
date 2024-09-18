import CertificationList from "@/components/things-i-know/CertificationList";
import CloudServices from "@/components/things-i-know/CloudServices";
import ItemsIKnow from "@/components/things-i-know/ItemsIKnow";
import { FRAMEWORKS, LANGUAGES } from "@/common/constants";

export default function Page() {
  return (
    <div className="sm:px-8 sm:mt-8 pb-20">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl dark:text-zinc-100">Things I know</h1>
            </header>
            <div className="mt-16 sm:mt-20 flex flex-col gap-5 lg:gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <CertificationList />
                <CloudServices className="col-span-1 lg:col-span-2" />
              </div>
              <div className="w-full">
                <ItemsIKnow items={LANGUAGES} title="Languages I Know" />
              </div>
              <div className="w-full">
                <ItemsIKnow items={FRAMEWORKS} title="Frameworks I Know" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
