import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "./setTheme.Slice.js";

export const ThemeSet = () => {
  const mode = useSelector((state) => state.mode.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [mode]);

  return (
    <div className="theme-container">
      <button className="theme-button" onClick={() => dispatch(toggleTheme())}>
        {mode === "light" ? "🌙" : "☀️"} {/* Ternary per icona */}
      </button>
    </div>
  );
};
