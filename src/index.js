import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProvider } from "./context";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    {/* Wraps all app in app provider */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
