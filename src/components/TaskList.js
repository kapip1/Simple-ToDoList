import React from "react";

const TaskList = (props) => {
  return (
    <>
      <h1>Aktywne zadania</h1>
      <span>{props.tasks}</span>
    </>
  );
};
export default TaskList;
