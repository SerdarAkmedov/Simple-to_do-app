import { useSelector } from "react-redux";

const TodoFooter = () => {
  const todos = useSelector((state) => state.todos);

  const handleSave = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default TodoFooter;
