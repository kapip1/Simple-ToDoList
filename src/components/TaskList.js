import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <>
      <h1>Active Tasks</h1>
      <h2>{tasks.length}</h2>
      <span>{tasks}</span>
    </>
  );
};
export default TaskList;
