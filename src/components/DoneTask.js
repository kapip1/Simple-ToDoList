import React from "react";

const DoneTask = ({ tasks }) => {
  return (
    <>
      <h1>Zadania zrobionie</h1>
      <span>({tasks.length})</span>
      <h3>{tasks}</h3>
    </>
  );
};
export default DoneTask;
