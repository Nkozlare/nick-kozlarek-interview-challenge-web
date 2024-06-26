import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "../public/styles/index.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
