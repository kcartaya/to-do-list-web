import { useState } from "react";
import axios from "axios";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", { title });
    setTitle("");
    //console.log(fetchTasks);
    //fetchTasks();
  };

  const editTask = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", { title });
    setTitle("");
    //console.log(fetchTasks);
    //fetchTasks();
  };

  return (
    <form onSubmit={addTask}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nueva tarea" required />
      <button type="submit">Agregar</button>
    </form>
  );
  
  
  return (
    <form onSubmit={editTask}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="editar" required />
      <button type="submit">editar</button>
    </form>
  );



};

export default TaskForm;
