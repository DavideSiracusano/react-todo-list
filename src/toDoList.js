import { useSelector, useDispatch } from "react-redux";
import { deleteToDo } from "./toDoListSlice";

export const ToDoList = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };
  const toDoList = useSelector((state) => state.toDoList);
  return (
    <ul className="todo-list">
      <h1 className="title">To Do List</h1>
      {toDoList.map((toDo) => (
        <li key={toDo.id}>
          {toDo.text}
          <button
            className="delete-button"
            onClick={() => handleDelete(toDo.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
