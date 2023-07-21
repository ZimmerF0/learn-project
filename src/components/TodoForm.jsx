import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { v4 } from "uuid";

const TodoForm = ({ todo }) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTodoValue("");
  };

  return (
    <div >
      <h1 className="title">My Todo List</h1>
      <div className="input-text">
        <input
          type="text"
          placeholder="Add todo item"
          value={todoValue}
          onChange={e => setTodoValue(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => addTodoHandler()}
          // disabled={input.length < 1}
        >
          Add
        </button>
      </div>
      <hr />
      
    </div>
  );
};

export default TodoForm;
