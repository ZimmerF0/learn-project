import React from "react";

const CompletedTodoItem = ({ todo}) => {
  return (
    <div>
      <ul>
        <li className="complete-item">
          <div className="complete-input-item">
            {todo.text}
            <div>Time: {todo.completedTodo} min</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompletedTodoItem;
