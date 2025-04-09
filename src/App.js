import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "This is a pizza with pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Cappricosa pizza",
      description: "This is a pizza with mushrooms",
    }),
    React.createElement(Pizza, {
      name: "The Margarita pizza",
      description: "This is a pizza with just Tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "The Hot-dog pizza",
      description: "This is a pizza with hot-dog",
    }),
    React.createElement(Pizza, {
      name: "The French fries pizza",
      description: "This is a pizza with french fries",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
