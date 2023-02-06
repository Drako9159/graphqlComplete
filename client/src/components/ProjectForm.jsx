import { useState } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

export default function ProjectForm() {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }, "getProjects"],
  });
  function handleChange(e) {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  }
  return (
    <form>
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={(e) => handleChange(e)}
      />

      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button
        disabled={!project.name || !project.description || loading}
        onClick={handleSubmit}
      >
        Save
      </button>
    </form>
  );
}
