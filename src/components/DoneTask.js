import React from "react";

const DoneTask = ({ tasks }) => {
  return (
    <>
      <h2>Done tasks</h2>
      <h3>{tasks.length}</h3>
      <span>{tasks}</span>
    </>
  );
};
export default DoneTask;
