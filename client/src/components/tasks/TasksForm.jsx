import { useMutation } from "@apollo/client";

import { CREATE_TASK } from "../../graphql/tasks";
import { useParams } from "react-router-dom";

export default function TasksForm() {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["getProject"],
  });
  const params = useParams();

  async function handleSubmit(event) {
    event.preventDefault();
    await createTask({
      variables: {
        title: event.target.title.value,
        projectId: params.id,
      },
    });
    event.target.reset();
    event.target.title.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title"></input>
      <button>Add</button>
    </form>
  );
}
