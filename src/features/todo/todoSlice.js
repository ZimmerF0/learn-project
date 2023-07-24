import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompletedTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const editTodo = state.todos.find(todo => todo.id === id);
      if (editTodo) {
        editTodo.id = id;
        editTodo.text = text;
      }
    },
    updateTime: (state, action) => {
      const { id, time } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completedTodo = time;
      }
    },
  },
});

export const { addTodo, toggleCompletedTodo, deleteTodo, editTodo, updateTime } =
  todoSlice.actions;
export default todoSlice.reducer;
