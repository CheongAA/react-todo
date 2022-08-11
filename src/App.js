import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        <List todo={todo} setTodo={setTodo} />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
