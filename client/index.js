import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Root } from "./root";

let root = document.getElementById("react-root");
if (!root) {
  root = document.createElement("div");
  root.id = "react-root";
  document.body.appendChild(root);
}

function renderApp(app) {
  render(<AppContainer>{app}</AppContainer>, root);
}

renderApp(<Root />);

if (module.hot) {
  module.hot.accept();
}
