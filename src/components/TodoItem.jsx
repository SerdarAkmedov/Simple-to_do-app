import { useDispatch } from "react-redux";
import { removeTodo, markTodoDone } from "../actions/todoAction";

const TodoItem = ({ id, title, isDone }) => {
  const dispatch = useDispatch();

  const handleMarkTodo = (e) => {
    dispatch(
      markTodoDone({
        id,
        title,
        isDone: e.target.checked,
      })
    );
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <input
            className="me-2 form-check-input"
            type="checkbox"
            value=""
            onChange={handleMarkTodo}
          />
          <label
            className={`form-check-label ${
              isDone ? "text-decoration-line-through" : ""
            }`}
          >
            {title}
          </label>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(removeTodo(id));
          }}
        >
          delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
