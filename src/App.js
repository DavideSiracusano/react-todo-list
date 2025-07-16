import "./App.css";
import { ToDoList } from "./toDoList";
import { ToDoListInput } from "./toDoListInput";
import { ThemeSet } from "./setTheme";

function App() {
  return (
    <div className="App">
      <ThemeSet />
      <ToDoList />
      <ToDoListInput />
    </div>
  );
}

export default App;
