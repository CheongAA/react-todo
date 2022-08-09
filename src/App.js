import React from "react";
import "./App.css";

const App = () => {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = () => ({
    padding: "10px",
    borderBottom: "1px dotted #ccc",
    textDecoration: "none",
  });

  let todoData = [
    {
      id: 1,
      title: "공부하기",
      completed: true,
    },
    {
      id: 2,
      title: "청소하기",
      completed: false,
    },
  ];

  const handleClick = (id) => {
    const newTodoData = todoData.filter((todo) => todo.id !== id);
    console.log(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((todo) => (
          <div style={getStyle()} key={todo.id}>
            <input type="checkBox" defaultChecked={todo.completed} />
            {todo.title}
            <button style={btnStyle} onClick={() => handleClick(todo.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
