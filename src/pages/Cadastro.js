import React, { useState } from 'react';
import '../App.css'; // Mantenha seu arquivo de estilo principal
import Cabecalho from '../components/Cabecalho';
import { FcGoogle } from "react-icons/fc"; // 1. Importe o ícone do Google

const Cadastro = () => {
  // Seus estados existentes
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Sua função handleSubmit existente
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Usuário cadastrado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
    setNome('');
    setEmail('');
    setSenha('');
  };

  // 2. Crie uma nova função para o clique no botão do Google
  const handleGoogleSignUp = () => {
    // A lógica de autenticação do Google viria aqui.
    // Por enquanto, vamos apenas mostrar um alerta.
    alert('Iniciando cadastro com o Google...');
  };

  return (
    <>
      <Cabecalho/>
      
      <div className="cadastro-container">
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <h2>Crie sua Conta</h2>
          
          {/* 3. Adicione o botão de cadastro com o Google */}
          <button type="button" className="google-signup-button" onClick={handleGoogleSignUp}>
            <FcGoogle size={22} /> {/* Ícone do Google */}
            <span>Cadastre-se com o Google</span>
          </button>

          {/* 4. Adicione um divisor visual */}
          <div className="divider">
            <span>OU</span>
          </div>

          {/* O resto do seu formulário */}
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;