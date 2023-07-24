import React, { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  toggleCompletedTodo,
  deleteTodo,
  editTodo,
} from "../features/todo/todoSlice";
// import { updateCompletedTodos } from "../features/todo/todoListSlice";

import TimeModal from "./TimeModal";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useState("");

  // const toggleTodoHandler = id => {
  //   dispatch(toggleCompletedTodo(id));
  // };
  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo({ id }));
    handleOpenModal();
  };

  const removeTodoHandler = id => {
    dispatch(deleteTodo(id));
  };

  const editTodoHandler = () => {
    const updatedTodo = {
      id: todo.id,
      text: newText,
    };
    dispatch(editTodo(updatedTodo));
    setIsEditing(false);
  };

  const handleOpenModal = () => {
    if (!todo.completed) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTime = time => {
    setTime(time);
    handleCloseModal();
  };

  return (
    <div>
      <ul>
        <li className="item">
        {!todo.completed && (
            <input
              onChange={() => {
                toggleTodoHandler(todo.id);
                handleOpenModal();
              }}
              className="checkbox"
              type="checkbox"
            />
          )}

          {isEditing ? (
            <div className="item-box">
              <input
                type="text"
                value={newText}
                onChange={e => setNewText(e.target.value)}
                className={`${todo.completed ? "completed" : ""}`}
              />
              <button
                className="success-btn"
                style={{ color: "green" }}
                onClick={() => {
                  editTodoHandler();
                }}
              >
                <AiFillCheckCircle />
              </button>
            </div>
          ) : (
            <div className="item">
              <span className={`${todo.completed ? "completed" : ""}`}>
                {todo.text}
              </span>
              <div className="all-btn">
                <button
                  onClick={() => setIsEditing(true)}
                  className="edit-btn"
                  style={{ color: "yellow" }}
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => {
                    removeTodoHandler(todo.id);
                  }}
                  className="del-btn"
                  style={{ color: "red" }}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
      <TimeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTime}
      />
    </div>
  );
};

export default TodoItem;
