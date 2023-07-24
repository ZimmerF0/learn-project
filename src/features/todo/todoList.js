import { createSlice } from "@reduxjs/toolkit";
// import { toggleCompletedTodo } from "./todoSlice";

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
  },
});

export const { setCompletedTodos } = todoListSlice.actions;
export default todoListSlice.reducer;

export const updateCompletedTodos = () => (dispatch, getState) => {
  const { todos } = getState();
  const completedTodos = todos.filter((todo) => todo.completed);
  dispatch(setCompletedTodos(completedTodos));
};