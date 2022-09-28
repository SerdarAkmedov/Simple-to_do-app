import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoAction";
import { v4 as uuidv4 } from "uuid";


const TodoForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        title: inputRef.current.value,
        id: uuidv4(),
        isDone: false,
      })
    );

    formRef.current.reset();
  };

  return (
    <>
      <div className="card-body">
        <form
          className="mb-3 d-flex justify-content-between"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div>
            <input
              id="demo"
              ref={inputRef}
              type="text"
              className="form-control"
              placeholder="Enter item..."
            />
          </div>
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
