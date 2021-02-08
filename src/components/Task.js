import React, { useState } from "react";

import "../styles/Task.css";
const Task = (props) => {
  const { important, title, date, click, id, edit, active } = props;

  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const [editDate, setEditDate] = useState(date);

  //EDIT FUNCTIONS
  const handleEditBtnName = () => {
    if (toggle) {
      setToggle(!toggle);
      setInputValue(title);
    } else {
      setToggle(!toggle);
    }
  };
  const handleChangeEditInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleChangeDateEdit = (e) => {
    setEditDate(e.target.value);
  };
  const handleEditBtnClick = () => {
    edit(inputValue, id, editDate);
    setInputValue(inputValue);
    setToggle(false);
  };

  const handleDeleteBtnClick = () => {
    click("DELETE", id);
  };

  const handleDoneBtnClick = () => {
    click("DONE", id);
  };
  const handleRestoreBtnClick = () => {
    click("RESTORE", id);
  };

  const isActive = active
    ? null
    : { textDecoration: "line-through", opacity: "0.25" };
  const isEditing = toggle ? (
    <>
      <button className="edit__button-confirm" onClick={handleEditBtnClick}>
        confirm edit
      </button>
      <input
        className="edit__input-name"
        type="text"
        value={inputValue}
        onChange={handleChangeEditInput}
      />
      <input
        className="edit__input-date"
        type="date"
        min="2020-01-01"
        value={editDate}
        onChange={handleChangeDateEdit}
      />
    </>
  ) : null;
  const isImportant = important ? { color: "red" } : { color: "black" };

  return (
    <div className="task" style={isImportant}>
      <button className="task__button-remove" onClick={handleDeleteBtnClick}>
        remove task
      </button>
      <span className="task__title" style={isActive}>
        {isEditing ? isEditing : title}
      </span>
      <span className="task__date" style={isActive}>
        {" "}
        {isEditing ? null : date}
      </span>

      {active ? (
        <button className="task__button-done" onClick={handleDoneBtnClick}>
          complete task
        </button>
      ) : null}
      {active ? (
        <button className="task__button-edit" onClick={handleEditBtnName}>
          {toggle ? " X " : "edit"}
        </button>
      ) : null}
      {active ? null : (
        <button
          className="task__button-restore"
          onClick={handleRestoreBtnClick}
        >
          restore task
        </button>
      )}
    </div>
  );
};

export default Task;
