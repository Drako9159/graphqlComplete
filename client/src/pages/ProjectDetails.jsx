import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import TasksList from "../components/tasks/TasksLists";
import TasksForm from "../components/tasks/TasksForm";
import { GET_PROJECT } from "../graphql/projects";

export default function ProjectDetails() {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id: params.id },
    skip: !params.id,
  });
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <TasksForm></TasksForm>
      <TasksList tasks={data.project.tasks}></TasksList>
      <button>Delete</button>
    </div>
  );
}
