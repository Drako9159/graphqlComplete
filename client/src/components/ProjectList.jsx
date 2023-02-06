import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
