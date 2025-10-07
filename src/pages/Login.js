import React, { useState } from 'react';
import '../App.css'; // Mantenha seu arquivo de estilo
import { FcGoogle } from "react-icons/fc"; // 1. Importe o ícone do Google

const Login = () => {
  // Seus estados existentes
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Sua função de submit existente
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Tentativa de login com:\nEmail: ${email}`);
    setEmail('');
    setSenha('');
  };

  // 2. Crie uma função para o clique no botão do Google
  const handleGoogleLogin = () => {
    // A lógica de autenticação do Google (OAuth) viria aqui.
    // Por enquanto, exibimos um alerta.
    alert('Iniciando login com o Google...');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Acesse sua Conta</h2>

        {/* 3. Adicione o botão de login com o Google */}
        <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
          <FcGoogle size={22} /> {/* Ícone */}
          <span>Entrar com o Google</span>
        </button>

        {/* 4. Adicione o mesmo divisor visual */}
        <div className="divider">
          <span>OU</span>
        </div>

        {/* O resto do seu formulário de login */}
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
        <button type="submit" className="submit-button">Entrar</button>
        <div className="login-footer">
          <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;