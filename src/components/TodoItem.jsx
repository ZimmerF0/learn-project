import React, { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleCompletedTodo, deleteTodo, editTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const editTodoHandler = () => {
    const updatedTodo = {
      id: todo.id,
      text: newText, // Corrected to use newText
    };
    dispatch(editTodo(updatedTodo));
    setIsEditing(false);
  };

  return (
    <div>
      <ul>
        <li className="item">
          <input
            onChange={() => toggleTodoHandler(todo.id)}
            className="checkbox"
            type="checkbox"
          />

          {isEditing ? (
            <div className="item-box">
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={`${todo.completed ? "completed" : ""}`}
              />
              <button className="success-btn" style={{ color: "green" }} onClick={editTodoHandler}>
                <AiFillCheckCircle />
              </button>
            </div>
          ) : (
            <div className="item">
              <span className={`${todo.completed ? "completed" : ""}`}>{todo.text}</span>
              <div className="all-btn">
          <button
                onClick={() => setIsEditing(true)}
                className="edit-btn"
                style={{ color: "yellow" }}
              >
                <AiFillEdit />
              </button>
            <button onClick={() => removeTodoHandler(todo.id)} className="del-btn" style={{ color: "red" }}>
              <AiFillDelete />
            </button>
          </div>
            </div>
          )}

         
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;