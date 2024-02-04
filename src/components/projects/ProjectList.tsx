import { projects } from "@/components/projects/project";
import ProjectItem from "@/components/projects/ProjectItem";

export default function ProjectList() {
  return (
    <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </ul>
  );
}
