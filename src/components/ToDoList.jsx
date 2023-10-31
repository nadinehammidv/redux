import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const { tasks } = useSelector((store) => store);
  console.log(tasks);

  return (
    <div className="to-do-list">
      {tasks.map((task) => (
        <ToDoItem title={task.title} isDone={task.isDone} id={task.id}
          showEdit={task.showEdit} />
      ))}
    </div>
  );
}

export default ToDoList;
