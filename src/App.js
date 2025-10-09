import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"





function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Contato" element ={<Contato/>} />
      <Route path="/sobre" element ={<Sobre/>} />
      <Route path="/" element ={<Home/>} />
      <Route path="/Login" element ={<Login/>} />  
      </Routes>
    </Router>
  );
}

export default App;
