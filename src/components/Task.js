import React, { useState } from "react";

const Task = (props) => {
  const { important, title, date, click, id, edit } = props;

  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState(title);

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
  const handleEditBtnClick = () => {
    if (inputValue.length > 3) {
      edit(inputValue, id);
      setInputValue(title);
      setToggle(false);
    } else {
      alert("podaj poprawna wartosc do edytowania");
    }
  };
  //DELETE FUNCTIONS
  const handleDeleteBtnClick = () => {
    click("delete", id);
  };
  const isEditing = toggle ? (
    <>
      <button onClick={handleEditBtnClick}>zatwierdz zmiane</button>
      <input type="text" value={inputValue} onChange={handleChangeEditInput} />
    </>
  ) : null;
  const isImportant = important ? { color: "red" } : { color: "black" };

  return (
    <div className="task" style={isImportant}>
      <span className="task__title">{isEditing ? isEditing : title}</span>
      <span className="task__date">{date}</span>
      <button className="task__button-remove" onClick={handleDeleteBtnClick}>
        usuń zadanie
      </button>
      <button className="task__button-done" onClick={() => click("done", id)}>
        zakończ zadanie
      </button>
      <button className="task__button-edit" onClick={handleEditBtnName}>
        {toggle ? " X " : "edit"}
      </button>
    </div>
  );
};

export default Task;
