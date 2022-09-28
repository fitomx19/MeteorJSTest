import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LinksCollection, MascotasCollection } from "../api/links";

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  const mascotas = useTracker(() => {
    return MascotasCollection.find().fetch();
  });

  return (
    <>
      <div>
        <h2>Aprende Meteor! 😊</h2>
        <ul>
          {links.map((link) => (
            <p key={link._id}>
              <a href={link.url} target="_blank">
                {link.title}
              </a>
            </p>
          ))}
        </ul>
      </div>
      <div>
        <h3>Lista de Mascotas </h3>
        <ul>
          {mascotas.map((m) => (
            <p key={m._id}>
              <p>
                Nombre Dueño: {m.nombre} | Edad mascota: {m.edad} | Nombre
                Mascota: {m.mascota}
              </p>
            </p>
          ))}
        </ul>
      </div>
    </>
  );
};
