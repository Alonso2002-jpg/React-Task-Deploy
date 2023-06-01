import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(id) {
    setTask(tasks.filter((t) => t.id !== id));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
