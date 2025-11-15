import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/login.css";

function Login() {
  const navigate = useNavigate();
  function Acessar() {
    navigate("/menu");
  }
  return (
    <>
      {/*Tela de login*/}
      <div className="area-logo">
        <img src={logo} width="125" height="125" />
        <h1>Capivac</h1>
      </div>

      <p className="texto-topo">Acesse sua conta</p>

      <div className="info">
        <img
          src="https://www.svgrepo.com/show/24584/info-icon.svg"
          width="20"
          height="20"
        />
        <p>Use seu CPF e senha do Conecta Recife para acessar o sistema</p>
      </div>

      <form className="form-div">
        <h2 className="login">Login</h2>
        <h3>CPF</h3>
        <input className="cpf" placeholder="000.000.000-00" />
        <h3>Senha</h3>

        <input className="senha" placeholder="Digite sua senha" />

        <button type="submit" class="entrar-btn" onClick={Acessar}>
          Entrar
        </button>
      </form>
      <h3>
        Não possui cadastro?{" "}
        <a
          target="_blank"
          href="https://login.recife.pe.gov.br/auth/realms/recife/login-actions/registration?client_id=psp&tab_id=aptEbOaFXRs"
        >
          Clique aqui
        </a>
      </h3>
    </>
  );
}
export default Login;
