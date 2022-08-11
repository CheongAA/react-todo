import React from "react";

const btnStyle = {
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

const List = ({ todo, setTodo }) => {
  const getStyle = (completed) => ({
    padding: "10px",
    borderBottom: "1px dotted #ccc",
    textDecoration: completed ? "line-through" : "none",
  });

  const handleCompletedChange = (id) => {
    setTodo((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleClick = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todo.map((todo) => (
        <div style={getStyle(todo.completed)} key={todo.id}>
          <input
            type="checkBox"
            defaultChecked={todo.completed}
            onChange={() => handleCompletedChange(todo.id)}
          />
          {todo.title}
          <button style={btnStyle} onClick={() => handleClick(todo.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
