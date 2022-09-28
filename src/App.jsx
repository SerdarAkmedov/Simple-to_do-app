import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";
import TodoItems from "./components/TodoItems";
import { initializeTodo } from "./actions/todoAction";

export default function App() {
  const dispatch = useDispatch();

  const todoItems = useSelector((state) => state.todos);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    dispatch(initializeTodo(todos));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodoHeader length={todoItems.length} />
            <TodoForm />
            <TodoItems />
            <TodoFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
