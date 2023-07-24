import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoList = createSlice({
  name: "todos",
  initialState,
  reducers: {

  }
})


export default todoList.reducer;