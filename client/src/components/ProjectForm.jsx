import { useState } from "react";

export default function ProjectForm() {
  const { project, setProject } = useState({
    title: "",
    description: "",
  });
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
  }
  return (
    <form>
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
      <button>Save</button>
    </form>
  );
}
