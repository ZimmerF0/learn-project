import { createSlice } from "@reduxjs/toolkit";

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
