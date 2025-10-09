import React, { useState, useEffect } from 'react';
import '../App.css';
import { jwtDecode } from 'jwt-decode';
import Cabecalho from '../components/Cabecalho';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); // hook de navegação

  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id: "1070560062887-e25cmf4cbthv73fj891bb0lpe5c192uh.apps.googleusercontent.com",
      callback: handleGoogleResponse,
    });

    window.google?.accounts.id.renderButton(
      document.getElementById("google-login-btn"),
      { theme: "outline", size: "large", text: "signin_with" }
    );
  }, []);

  const handleGoogleResponse = (response) => {
    const userData = jwtDecode(response.credential);
    console.log("Dados do usuário Google:", userData);
    // Redireciona para Home
    navigate('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Tentativa de login com:", email);
    // Aqui você pode validar email e senha se quiser
    navigate('/'); // redireciona para Home
  };

  return (
    <>
      <Cabecalho/>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Acesse sua Conta</h2>

          <div id="google-login-btn"></div>

          <div className="divider">
            <span>OU</span>
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

          <button type="submit" className="submit-button">Entrar</button>
        </form>
      </div>
    </>
  );
};

export default Login;