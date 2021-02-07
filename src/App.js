import React, { useState } from "react";

import AddTask from "./components/AddTask";
import DoneTask from "./components/DoneTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

import "./App.css";

const App = () => {
  const [activeTaskList, setActiveTaskList] = useState([
    {
      id: 0,
      title: "Odrobic lekcje z matematyki",
      date: "2021-02-30",
      important: false,
    },
    {
      id: 1,
      title: "Odrobic lekcje z Polskiego",
      date: "2021-01-20",
      important: true,
    },
    {
      id: 2,
      title: "Odrobic lekcje z fizyki",
      date: "2021-03-30",
      important: false,
    },
  ]);
  const [doneTaskList, setDoneTaskList] = useState([]);

  //edit task
  const handleTaskEdit = (value, id) => {
    const taskList = [...activeTaskList];
    const index = taskList.findIndex((task) => task.id === id);
    taskList[index].title = value;
    setActiveTaskList(taskList);
  };

  //delete task and done task
  const handleTaskBtnClick = (type, id) => {
    const taskList = [...activeTaskList];
    if (type === "delete") {
      const index = taskList.findIndex((task) => task.id === id);
      taskList.splice(index, 1);
      setActiveTaskList(taskList);
    }
    if (type === "done") {
      const index = taskList.findIndex((task) => task.id === id);
      console.log("zadanie zakonczone " + index);
    }
  };

  const activeTasks = activeTaskList.map((task) => (
    <Task
      key={task.id}
      title={task.title}
      date={task.date}
      id={task.id}
      important={task.important}
      click={handleTaskBtnClick}
      edit={handleTaskEdit}
    />
  ));
  const doneTasks = doneTaskList.map((task) => (
    <Task
      key={task.id}
      title={task.title}
      date={task.date}
      id={task.id}
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
        <DoneTask tasks={doneTasks} />
      </div>
    </div>
  );
};

export default App;
