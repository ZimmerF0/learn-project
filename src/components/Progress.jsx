import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
// import { useDispatch } from "react-redux";

const Progress = () => {
  const completedTodos = useSelector(state => state.todo.todos.filter(todo => todo.completed));

  return (
    <div>
      <h1 className="title">List of completed tasks</h1>
      <div>
        <ul>
          {completedTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Progress;
