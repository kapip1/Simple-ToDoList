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
    const taskListActive = [...activeTaskList];
    const taskListDone = [...doneTaskList];
    const indexActive = taskListActive.findIndex((task) => task.id === id);
    const indexDone = taskListDone.findIndex((task) => task.id === id);

    if (type === "DELETE") {
      console.log(indexActive, indexDone);
      if (indexActive !== -1) {
        taskListActive.splice(indexActive, 1);
        setActiveTaskList(taskListActive);
      } else if (indexDone !== -1) {
        taskListDone.splice(indexDone, 1);
        setDoneTaskList(taskListDone);
      }
    }
    if (type === "DONE") {
      taskListDone.push(taskListActive[indexActive]);
      taskListActive.splice(indexActive, 1);
      setDoneTaskList(taskListDone);
      setActiveTaskList(taskListActive);
    }
    if (type === "RESTORE") {
      taskListActive.push(taskListDone[indexDone]);
      taskListDone.splice(indexDone, 1);
      setDoneTaskList(taskListDone);
      setActiveTaskList(taskListActive);
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
      active={true}
    />
  ));
  const doneTasks = doneTaskList.map((task) => (
    <Task
      title={task.title}
      key={task.id}
      date={task.date}
      id={task.id}
      important={task.important}
      click={handleTaskBtnClick}
      active={false}
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
