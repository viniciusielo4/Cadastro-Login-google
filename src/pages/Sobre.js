import "../App.css";
import Cabecalho from '../components/Cabecalho';

function Sobre() {
  return (
    <>
      <Cabecalho />
      <div className="sobre-container">
        <h1>Sobre o Projeto</h1>
        <p>
          Este projeto foi criado para demonstrar o uso da <strong>API de Contas do Google</strong> 
          (Google Identity Services), que permite que usuários façam login com segurança e rapidez.
        </p>
        <p>
          O sistema foi desenvolvido em <strong>React.js</strong> e faz uso de tokens <strong>JWT</strong> 
          para gerenciar a autenticação, garantindo que apenas usuários autorizados acessem a aplicação.
        </p>
        <p>
          Além disso, o projeto inclui páginas de cadastro, login e uma área Home protegida, mostrando
          como integrar o Google Sign-In em aplicações reais.
        </p>
        <p><em>Segurança e simplicidade na ponta dos dedos.</em></p>
      </div>
    </>
  );
}

export default Sobre;
