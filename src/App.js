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

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <div style={getStyle()}>
          <input type="checkBox" defaultChecked={false} />
          공부하기
          <button style={btnStyle}>x</button>
        </div>
      </div>
    </div>
  );
};

export default App;
