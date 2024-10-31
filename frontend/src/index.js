import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Contatos from "./pages/Contatos";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Contatos" element={<Contatos />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </AuthProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
