import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from "./pages/Login"





function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Login" element ={<Login/>} />  
      </Routes>
    </Router>
  );
}

export default App;
