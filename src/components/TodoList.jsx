import React from "react";
import { useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    <div className="main">
      <TodoForm />

      {todos?.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
