import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCompletedTodos } from "./utils/api"; // Укажите правильный путь к файлу api.js
import { setCompletedTodos } from "./features/todo/todoListSlice";
import TodoList from "./components/TodoList";
import Progress from "./components/Progress";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const completedTodos = await fetchCompletedTodos();
        dispatch(setCompletedTodos(completedTodos));
      } catch (error) {
        console.error("Ошибка при загрузке выполненных тудушек:", error);
      }
    };
    loadData();
  }, [dispatch]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">TODO</Link>
            </li>
            <li>
              <Link to="/progress">PROGRESS</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
