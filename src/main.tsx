import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import EmployeeRecordProvider from "./EmployeeRecordList";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EmployeeRecordProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EmployeeRecordProvider>
  </React.StrictMode>
);
