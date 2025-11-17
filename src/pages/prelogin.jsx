import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/prelogin.css";
import NavBar from "../components/navbar";

function Prelogin() {
  const navigate = useNavigate();
  function Acessar() {
    navigate("/login");
  }
  return (
    <>
      {/*Tela inicial*/}
      <div className="logo">
        <img src={logo} className="logo-name" />
        <h1>Capivac</h1>
      </div>
      <p className="subtitle">
        Sistema de incentivo de vacinação no Recife
        <br />
        Simples, rápido e seguro
      </p>
      
      <button class="button" onClick={Acessar}>Acessar Plataforma</button>
      
      <div className="caixas">
        <div class="caixa">
          <p className="imagem">
            <img
              src="https://cdn-icons-png.flaticon.com/512/102/102649.png"
              width="30"
              height="30"
            ></img>
            <b>&nbsp;Seguro</b>
            <br></br>Seus dados protegidos com as melhores práticas de segurança
          </p>
        </div>
        <div className="caixa">
          <p className="imagem">
            <img
              src="https://static.thenounproject.com/png/1286514-200.png"
              width="30"
              height="30"
            ></img>
            <b>Rápido</b>
            <br />Acesso instantâneo aos serviços que você precisa
          </p>
        </div>
        <div class="caixa">
          <p className="imagem">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/8atour/people-23.png"
              width="30"
              height="30"
            ></img>
            <b>&nbsp;Acessível</b>
            <br></br>Interface intuitiva e aberta a todos os cidadãos
          </p>
        </div>
      </div>
    </>
  );
}
export default Prelogin;
