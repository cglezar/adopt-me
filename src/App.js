import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Maia",
      animal: "Dog",
      breed: "Goldendoodle",
    }),
    React.createElement(Pet, {
      name: "Chica",
      animal: "Dog",
      breed: "Beagle",
    }),
    React.createElement(Pet, {
      name: "Nana",
      animal: "Dog",
      breed: "Cocker Spaniel",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
