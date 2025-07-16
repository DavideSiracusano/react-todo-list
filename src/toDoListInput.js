import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./toDoListSlice";

export const ToDoListInput = () => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (!newTask) return;
    e.preventDefault();
    dispatch(addToDo(newTask));
    setNewTask("");
  };

  return (
    <div className="todo-list-input">
      <input
        onChange={handleChange}
        type="text"
        placeholder="To Do List Input"
        value={newTask}
      />
      <button className="add-button" onClick={handleSubmit} type="submit">
        Add Task
      </button>
    </div>
  );
};
