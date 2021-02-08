import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddTask from "./components/AddTask";
import DoneTask from "./components/DoneTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

import "./App.css";

const App = () => {
  const [activeTaskList, setActiveTaskList] = useState([]);
  const [doneTaskList, setDoneTaskList] = useState([]);

  //Add Task
  const handleAddTask = (title, date, important) => {
    const taskList = [...activeTaskList];
    const task = {
      id: uuidv4(),
      title,
      date,
      important,
    };
    taskList.push(task);
    setActiveTaskList(taskList);
  };
  //Edit task
  const handleTaskEdit = (value, id, editDate) => {
    const taskList = [...activeTaskList];
    const index = taskList.findIndex((task) => task.id === id);
    taskList[index].title = value;
    taskList[index].date = editDate;
    setActiveTaskList(taskList);
  };

  //Delete task and done task
  const handleTaskBtnClick = (type, id) => {
    const taskListActive = [...activeTaskList];
    const taskListDone = [...doneTaskList];
    const indexActive = taskListActive.findIndex((task) => task.id === id);
    const indexDone = taskListDone.findIndex((task) => task.id === id);

    if (type === "DELETE") {
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
        <AddTask add={handleAddTask} />
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
