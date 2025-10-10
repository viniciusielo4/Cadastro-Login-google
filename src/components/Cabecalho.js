import React from 'react'
import '../App.css'
function Cabecalho() {
  return (
    <header className="header">
    <h1 className="header-title">Login com API google</h1>
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/sobre">Sobre</a></li>
        <li className="nav-item"><a href="/contato">Contato</a></li>
        <li className="nav-item"><a href="/login">Login</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Cabecalho
