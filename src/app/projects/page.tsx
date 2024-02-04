import ProjectList from "@/components/projects/ProjectList";

export default function Projects() {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32 pb-20">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl dark:text-zinc-100">
                Projects I&apos;ve created in an effort to leave my mark on the world.
              </h1>
            </header>
            <div className="mt-16 sm:mt-20">
              <ProjectList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
