import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importado o axios
import logo from "../assets/logo.png";
import "../css/login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setCpf] = useState("");
  const [password, setSenha] = useState("");
  
  const handleSenha = (e) => {
    let inputSenha = e.target.value;
    setSenha(inputSenha);
  };

  const handleCpf = (e) => {
    let inputCpf = e.target.value;

    // lógica de substituir qualquer não número por nada
    inputCpf = inputCpf.replace(/\D/g, "");

    // limitação de caracteres do cpf (11)
    inputCpf = inputCpf.slice(0, 11);

    // formatação
    inputCpf = inputCpf
      .replace(/(\d{3})(\d)/, "$1.$2") // coloca o 1 ponto
      .replace(/(\d{3})(\d)/, "$1.$2") // coloca o 2 ponto
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // coloca o traço

    // atualiza o estado
    setCpf(inputCpf);
  };

  // Mantido o nome da função conforme o original
  async function Acessar(event) {
    event.preventDefault();

    // Ajustado para o que o seu backend espera (username/password)
    const dadosParaEnviar = {
      username: username.replace(/\D/g, ""), 
      password: password 
    };

    try {
      // Alterado para Axios com withCredentials para suportar o token HTTP ONLY
      const response = await axios.post("http://localhost:3000/api/auth/login", dadosParaEnviar, {
        withCredentials: true
      });

      // Acessando os dados via response.data (padrão do Axios)
      if (response.data.role === "user") {
        alert("Vou para menu-comum")
        navigate("/menu-comum");
      } else if (response.data.role === "admin") {
        alert("Vou para menu-funcionario")
        navigate("/menu-funcionario");
      }

    } catch (error) {
      // Lógica de erro amigável
      console.error("Erro no login", error);
      alert(error.response?.data?.message || "Erro ao realizar login");
    }
  }

  return (
    <>
      {/*Tela de login*/}
      <div className="area-logo">
        <img src={logo} width="125" height="125" alt="logo" />
        <h1>Capivac</h1>
      </div>

      <p className="texto-topo">Acesse sua conta</p>

      <div className="info">
        <p>Use seu CPF e senha do Conecta Recife para acessar o sistema</p>
      </div>

      <form className="form-div" onSubmit={Acessar}>
        <h2 className="login">Login</h2>

        <h3>CPF</h3>
        <input
          className="cpf"
          placeholder="000.000.000-00"
          maxLength={14}
          value={username}
          onChange={handleCpf}
        />
        <h3>Senha</h3>
        <input 
          type="password" // Adicionado apenas para segurança visual
          className="senha" 
          placeholder="Digite sua senha" 
          value={password}
          onChange={handleSenha}
        />

        <button
          type="submit"
          disabled={username.length < 14}
          className="entrar-btn"
        >
          Entrar
        </button>
      </form>
      <h3 className="sem-cadastro">
        Não possui cadastro?{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://login.recife.pe.gov.br/auth/realms/recife/login-actions/registration?client_id=psp&tab_id=aptEbOaFXRs"
        >
          Clique aqui
        </a>
      </h3>
    </>
  );
}

export default Login;