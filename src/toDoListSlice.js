import { createSlice } from "@reduxjs/toolkit";

const savedToDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: savedToDoList,
  reducers: {
    addToDo: (state, action) => {
      state.push({ id: state.length + 1, text: action.payload });
    },
    deleteToDo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = toDoListSlice.actions;
export default toDoListSlice.reducer;
