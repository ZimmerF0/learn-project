import React from "react";
import { AiFillDelete, AiFillEdit, AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleCompletedTodo, deleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = id => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = id => {
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      <ul>
        <li className="item">
          <input
            onChange={() => toggleTodoHandler(todo.id)}
            className="checkbox"
            type="checkbox"
          />

          <input
            type="text"
            value={todo.text}
            className={`${todo.completed ? "completed" : ""}`}
          />
          <button className="success-btn" style={{ color: "green" }}>
            <AiFillCheckCircle />
          </button>

          <div className="all-btn">
            <button className="edit-btn" style={{ color: "yellow" }}>
              <AiFillEdit />
            </button>
            <button onClick={() => removeTodoHandler(todo.id)} className="del-btn" style={{ color: "red" }}>
              <AiFillDelete />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
