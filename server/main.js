import { Meteor } from "meteor/meteor";
import { LinksCollection, MascotasCollection } from "/imports/api/links";
import { TasksCollection } from "/imports/api/TasksCollection";

function insertLink({ title, url }) {
  LinksCollection.insert({ title, url, createdAt: new Date() });
}

function crearMascota({ nombre, mascota, edad }) {
  MascotasCollection.insert({ nombre, mascota, edad, createdAt: new Date() });
}

const insertTask = (taskText) => TasksCollection.insert({ text: taskText });
Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: "Haz el tutorial",
      url: "https://www.meteor.com/tutorials/react/creating-an-app"
    });
  }

  if (MascotasCollection.find().count() === 0) {
    crearMascota({
      nombre: "Adolfo",
      mascota: "Gato",
      edad: 5
    });
  }

  if (TasksCollection.find().count() === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task"
    ].forEach(insertTask);
  }
});
