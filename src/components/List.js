import React from "react";

const List = ({ todo, setTodo }) => {
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
        <div key={todo.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkBox"
                defaultChecked={todo.completed}
                onChange={() => handleCompletedChange(todo.id)}
              />
              <span className={todo.completed ? "line-through" : undefined}>
                {todo.title}
              </span>
            </div>
            <div className="items-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => handleClick(todo.id)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
