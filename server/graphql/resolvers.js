import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
  Query: {
    hello: () => "hello world",
    projects: async () => await Project.find(),
    project: async (_, { _id }) => Project.findById(_id),

    tasks: async () => await Task.find(),
    task: async (_, { _id }) => Task.findById(_id),
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({ name, description });
      const saveProject = await project.save();
      return saveProject;
    },
    createTask: async (_, { title, projectId }) => {
      const projectFound = await Project.findById(projectId);
      if (!projectFound) throw new Error("Project not found");
      const task = new Task({
        title,
        projectId,
      });
      const taskSave = await task.save();
      return taskSave;
    },
    deleteProject: async (_, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete(_id);
      if (!deletedProject) throw new Error("Project not Found");
      return deletedProject;
    },
    deleteTask: async (_, { _id }) => {
      const deletedTask = await Task.findByIdAndDelete(_id);
      if (!deletedTask) throw new Error("Task not Found");
      return deletedTask;
    },
    updateProject: async (_, args) => {
      const updatedProject = await Project.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedProject) throw new Error("Project not found");
      return updatedProject;
    },
    updateTask: async (_, args) => {
      const updatedTask = await Task.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedTask) throw new Error("Task not found");
      return updatedTask;
    },
  },
};
