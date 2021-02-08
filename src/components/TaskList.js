import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <>
      <h1>Aktywne zadania</h1>
      <span>({tasks.length})</span>
      <span>{tasks}</span>
    </>
  );
};
export default TaskList;
