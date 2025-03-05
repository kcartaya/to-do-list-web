import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
