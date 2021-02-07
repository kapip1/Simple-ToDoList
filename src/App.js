import React, { useState } from "react";

import AddTask from "./components/AddTask";
import DoneTask from "./components/DoneTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

import "./App.css";

const App = () => {
  let activeTaskList = [
    {
      title: "Odrobic lekcje z matematyki",
      date: "2021-02-30",
      important: false,
    },
  ];
  let doneTaskList = [];

  const handleTaskBtnClick = () => {
    console.log("click");
  };

  const activeTasks = activeTaskList.map((task) => (
    <Task
      key={task.id}
      title={task.title}
      date={task.date}
      important={task.important}
      click={handleTaskBtnClick}
    />
  ));

  return (
    <div className="App">
      <div className="AddTask">
        <AddTask />
      </div>
      <div className="TaskList">
        <TaskList tasks={activeTasks} />
      </div>
      <div className="DoneTask">
        <DoneTask />
      </div>
    </div>
  );
};

export default App;
