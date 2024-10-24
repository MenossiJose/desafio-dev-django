import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import LoginFuncionario from './pages/LoginFuncionario';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/LoginFuncionario" element={<LoginFuncionario />} />
     </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
