import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";
import "../../public/main.css";
import { TasksCollection } from "/imports/api/TasksCollection";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";

export const App = () => {
  const tasks = useTracker(() =>
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );
  return (
    <>
      <div className="box">
        <h1>Hola Mundo en MeteorJS!</h1>
        <Info />
      </div>

      <div>
        <p>Nombre</p>
        <TaskForm />

        <ul>
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </ul>
      </div>
    </>
  );
};
