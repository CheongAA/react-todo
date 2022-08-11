import React from "react";

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", padding: "5px" }}
        placeholder="해야 할 일을 입력하세요."
        value={inputValue}
        onChange={handleChange}
      />
      <input type="submit" value="입력" className="btn" style={{ flex: 1 }} />
    </form>
  );
};

export default Form;
