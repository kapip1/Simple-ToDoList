import React, { useState } from "react";

const AddTask = (props) => {
  const { add } = props;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleCheckBoxChange = () => {};
  const handleBtnAddTask = () => {
    if (inputValue.length > 3) {
      add(inputValue, "2002-08-05", true);
    } else {
      alert("zla forma inputa");
    }
  };

  return (
    <>
      <br />
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleBtnAddTask}>add task</button>
    </>
  );
};
export default AddTask;
