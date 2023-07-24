import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import todoList from "../features/list/todoList";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    list: todoList,
  },
});
