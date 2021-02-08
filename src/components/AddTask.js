import React, { useState } from "react";

import "../styles/AddTask.css";

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
      setDate("");
      alert("task name must be at least 3 letters long");
      setCheck(false);
    }
  };

  return (
    <div className="addtask">
      <label className="addtask__input-name" htmlFor="name">
        Name
        <input
          placeholder="Task name ..."
          id="name"
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
        />
      </label>
      <label className="addtask__input-date" htmlFor="date">
        Date
        <input
          id="date"
          type="date"
          value={date}
          onChange={handleInputDateChange}
        />
      </label>
      <label className="addtask__checkbox-important" htmlFor="checkbox">
        Important
        <input
          id="checkbox"
          type="checkbox"
          checked={check}
          onChange={handleCheckBoxChange}
        />
      </label>
      <button className="addtask__button" onClick={handleBtnAddTask}>
        add task
      </button>
    </div>
  );
};
export default AddTask;
