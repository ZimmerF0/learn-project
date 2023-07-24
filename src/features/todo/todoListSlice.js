import { createSlice } from "@reduxjs/toolkit";
import { toggleCompletedTodo } from "../todo/todoSlice";

const initialState = {
  completedTodos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setCompletedTodos: (state, action) => {
      state.completedTodos = action.payload;
    },
    updateCompletedTodos: () => (dispatch, getState) => {
      const todos = getState().todos;
      const completedTodos = todos.filter(todo => todo.completed);
      dispatch(setCompletedTodos(completedTodos));
    },
  },
});

export const { setCompletedTodos, updateCompletedTodos } =
  todoListSlice.actions;
export default todoListSlice.reducer;
