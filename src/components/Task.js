import React, { useState } from "react";

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
    if (inputValue.length > 3) {
      edit(inputValue, id, editDate);
      setInputValue(inputValue);
      setToggle(false);
    } else {
      alert("podaj poprawna wartosc do edytowania");
    }
  };

  //DELETE FUNCTIONS
  const handleDeleteBtnClick = () => {
    click("DELETE", id);
  };

  //DONE FUNCTIONS
  const handleDoneBtnClick = () => {
    click("DONE", id);
  };
  const handleRestoreBtnClick = () => {
    click("RESTORE", id);
  };

  //STYLES
  const isActive = active ? null : { textDecoration: "line-through" };
  const isEditing = toggle ? (
    <>
      <button className="edit__button-confirm" onClick={handleEditBtnClick}>
        zatwierdz zmiane
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
      <span className="task__title" style={isActive}>
        {isEditing ? isEditing : title}
      </span>
      <span className="task__date" style={isActive}>
        {" "}
        {isEditing ? null : date}
      </span>

      <button className="task__button-remove" onClick={handleDeleteBtnClick}>
        usuń zadanie
      </button>

      {active ? (
        <button className="task__button-done" onClick={handleDoneBtnClick}>
          zakończ zadanie
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
          Przywróć zadanie
        </button>
      )}
    </div>
  );
};

export default Task;
