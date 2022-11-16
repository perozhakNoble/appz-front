import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>
);
