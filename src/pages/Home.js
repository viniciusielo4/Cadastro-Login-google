import "../App.css";
import Cabecalho from '../components/Cabecalho';

function Home() {
  return (
    <>
      <Cabecalho />
      <div className="home-container">
        <section className="home-hero">
          <h1>Autenticação Segura com Google API</h1>
          <p>
            Projeto desenvolvido para demonstrar um sistema moderno de login e cadastro de usuários 
            utilizando a API de Contas do Google (Google Identity Services).
          </p>
          <a href="/sobre" className="home-button">Saiba Mais</a>
        </section>

        <section className="home-sections">
          <div className="home-card">
            <h3>🔐 Login Inteligente</h3>
            <p>
              Faça login de forma simples e segura com apenas um clique, usando sua conta Google.
            </p>
          </div>
          <div className="home-card">
            <h3>☁️ Integração com APIs</h3>
            <p>
              O sistema utiliza autenticação JWT para validar usuários e garantir proteção de dados.
            </p>
          </div>
          <div className="home-card">
            <h3>💡 Interface Intuitiva</h3>
            <p>
              Páginas modernas e responsivas criadas com React para oferecer uma ótima experiência.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
