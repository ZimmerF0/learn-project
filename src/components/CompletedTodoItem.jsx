import React from "react";
import { formatTime } from "../utils/formatTime"

const CompletedTodoItem = ({ todo}) => {
  const formattedTime = formatTime(todo.completedTodo);
  return (
    <div>
      <ul>
        <li className="complete-item">
          <div className="complete-input-item">
            {todo.text}
            <div>Time: {formattedTime}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompletedTodoItem;
