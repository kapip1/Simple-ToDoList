import React, { useState } from "react";

const AddTask = ({ add }) => {
  const [date, setDate] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [check, setCheck] = useState(false);

  const handleInputDateChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };
  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleCheckBoxChange = () => {
    setCheck(!check);
  };
  const handleBtnAddTask = () => {
    if (inputValue.length > 3) {
      add(inputValue, date, check);
      setInputValue("");
      setDate("");
      setCheck(false);
    } else {
      console.log(date);
      setCheck(false);
    }
  };

  return (
    <>
      <br />
      Nazwa:
      <input type="text" value={inputValue} onChange={handleInputValueChange} />
      data:
      <input type="date" value={date} onChange={handleInputDateChange} />
      ważne:{" "}
      <input type="checkbox" checked={check} onChange={handleCheckBoxChange} />
      <button onClick={handleBtnAddTask}>add task</button>
    </>
  );
};
export default AddTask;
