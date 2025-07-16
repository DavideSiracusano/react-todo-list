import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./toDoListSlice";
import themeReducer from "./setTheme.Slice.js";

export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
    mode: themeReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("toDoList", JSON.stringify(store.getState().toDoList));
});
