import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
