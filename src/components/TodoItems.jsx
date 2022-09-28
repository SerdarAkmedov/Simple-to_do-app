import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <ul className="list-group list-group-flush">
     {todos.length > 0 ? todos.map(item => {
      return <TodoItem title={item.title} key={item.id} id={item.id} isDone={item.isDone}/>
     }) : (
      <h3 className="text-center my-2">Gündelik işler ýok</h3>
     )}
      </ul>
    </>
  );
};

export default TodoItems;
