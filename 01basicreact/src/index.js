import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
 * Here we are using the createRoot API to create a root for the application.
 * The createRoot API is used to create a root for the application.
 * here react is creating its own DOM which is known as virtual DOM. then it will compare the virtual DOM with the actual DOM and update the actual DOM.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
// now we have selected the root element and we are rendering the App component inside the root element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
