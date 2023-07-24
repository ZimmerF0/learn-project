import React from "react";

const CompletedTodoItem = ({ todo, time }) => {
  return (
    <div>
      <ul>
        <li className="complete-item">
          <div className="complete-input-item">
            {todo.text}
            <div>Time: {time} min</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompletedTodoItem;
