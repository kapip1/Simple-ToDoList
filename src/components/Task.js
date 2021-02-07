const Task = (props) => {
  const { important, title, date } = props;
  const isImportant = important ? { color: "red" } : { color: "black" };
  return (
    <div className="task" style={isImportant}>
      <p className="task__title">{title}</p>
      <p className="task__date">{date}</p>
      <button name="remove" className="task__button-remove">
        usuń zadanie
      </button>
      <button name="done" className="task__button-done">
        zakończ zadanie
      </button>
      <button name="edit" className="task__button-edit">
        edit
      </button>
    </div>
  );
};

export default Task;
