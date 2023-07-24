import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import todoListReducer from "../features/todo/todoListSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    todoList: todoListReducer,
  },
});
