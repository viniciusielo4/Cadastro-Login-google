import "../App.css";
import Cabecalho from '../components/Cabecalho';
import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <>
      <Cabecalho />
      <div className="contato-container">
        <h1>Entre em Contato</h1>
        <p>Quer saber mais sobre o projeto ou tirar dúvidas? Fale conosco!</p>

        <form className="contato-form" onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Mensagem</label>
          <textarea
            rows="5"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Contato;
