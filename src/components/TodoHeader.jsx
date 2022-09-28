const TodoHeader = ({length}) => {
  return (
    <>
      <div className="card-header">
        <h1>Gündelik işler: {length}</h1>
      </div>
    </>
  );
};

export default TodoHeader;