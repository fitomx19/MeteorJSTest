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
        <h2>Learn Meteor!</h2>
        <ul>
          {links.map((link) => (
            <li key={link._id}>
              <a href={link.url} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Mascotas OwO</h3>
        <ul>
          {mascotas.map((m) => (
            <li key={m._id}>
              <p>
                {m.nombre} | {m.edad} | {m.mascota}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
