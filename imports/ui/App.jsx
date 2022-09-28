import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";
import "../../public/main.css";
import { TasksCollection } from "/imports/api/TasksCollection";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { useTracker } from "meteor/react-meteor-data";

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

      <div className="center">
        <p>Nombre</p>
        <TaskForm />

        <p>
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </p>
      </div>
    </>
  );
};
