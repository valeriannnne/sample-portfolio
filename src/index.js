import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Projects from "./Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // import the routing components

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/view-projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
