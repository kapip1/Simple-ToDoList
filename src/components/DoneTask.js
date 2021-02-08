import React from "react";

const DoneTask = (props) => {
  return (
    <>
      <h1>Zadania zrobionie</h1>
      <h3>{props.tasks}</h3>
    </>
  );
};
export default DoneTask;
