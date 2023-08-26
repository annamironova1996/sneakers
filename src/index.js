import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./index.sass";
import App from "./App";
import "macro-css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <App />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
