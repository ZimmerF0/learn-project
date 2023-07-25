import React from "react";
import { useSelector } from "react-redux";
import CompletedTodoItem from "./CompletedTodoItem";
import { formatTime } from "../utils/formatTime";

const Progress = () => {
  const completedTodos = useSelector(state =>
    state.todo.todos.filter(todo => todo.completed)
  );

  const totalCompletedTodos = completedTodos.length;

  const totalTimeInMinutes = completedTodos.reduce(
    (totalTime, todo) => totalTime + parseInt(todo.completedTodo),
    0
  );

  const formattedTotalTime = formatTime(totalTimeInMinutes);

  return (
    <div className="main">
      <h1 className="title">List of completed tasks</h1>
      <div>
        <ul>
          {completedTodos.map(todo => (
            <li key={todo.id} className="item-complete">
              <CompletedTodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Total completed tasks: {totalCompletedTodos}</p>
        <p>Total time: {formattedTotalTime}</p>
      </div>
    </div>
  );
};

export default Progress;
