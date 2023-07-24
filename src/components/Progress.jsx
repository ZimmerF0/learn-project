import React from "react";
import { useSelector } from "react-redux";
import CompletedTodoItem from "./CompletedTodoItem";

const Progress = () => {
  const completedTodos = useSelector(state =>
    state.todo.todos.filter(todo => todo.completed)
  );

  return (
    <div className="main">
      <h1 className="title">List of completed tasks</h1>
      <div>
        <ul>
          {completedTodos.map(todo => (
            <li key={todo.id}>
              <CompletedTodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Progress;
