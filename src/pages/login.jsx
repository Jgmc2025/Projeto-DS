import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import logo from "../assets/logo.png";
import "../css/login.css";

function Login() {
  const navigate = useNavigate();
  const [valor, setValor] = useState(""); 
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState(""); 

  const handleCpf = (e) => {
    let inputCpf = e.target.value;
    inputCpf = inputCpf.replace(/\D/g, "");
    inputCpf = inputCpf.slice(0, 11);
    inputCpf = inputCpf
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(inputCpf);
  };

  async function Acessar(event) {
    event.preventDefault();

    if (!valor) {
      alert("Por favor, selecione um tipo de usuário.");
      return;
    }

    if (!senha) {
      alert("Por favor, digite sua senha.");
      return;
    }

    try {
      // Tenta conectar com o Backend
      const response = await axios.post(
        "http://localhost:3000/api/auth/login", 
        {
          username: cpf, 
          password: senha
        },
        { withCredentials: true } 
      );

      console.log("Login realizado:", response.data);

      if (valor === "comum") {
        navigate("/menu-comum");
      } else if (valor === "funcionario") {
        navigate("/menu-funcionario");
      }

    } catch (error) {
      console.error("Erro no login:", error);
      if (error.response) {
        alert(error.response.data.message || "Erro ao fazer login.");
      } else {
        alert("Erro de conexão com o servidor.");
      }
    }
  }

  return (
    <>
      <div className="area-logo">
        <img src={logo} width="125" height="125" alt="Logo Capivac" />
        <h1>Capivac</h1>
      </div>

      <p className="texto-topo">Acesse sua conta</p>

      <div className="info">
        <p>Use seu CPF e senha do Conecta Recife para acessar o sistema</p>
      </div>

      <form className="form-div" onSubmit={Acessar}>
        <h2 className="login">Login</h2>

        <select
          className="selecionar"
          id="opcoes"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        >
          <option value="">--Selecione--</option>
          <option value="comum">Usuário comum</option>
          <option value="funcionario">Funcionário</option>
        </select>

        <h3>CPF</h3>
        <input
          className="cpf"
          placeholder="000.000.000-00"
          maxLength={14}
          value={cpf}
          onChange={handleCpf}
        />
        
        <h3>Senha</h3>
        <input 
          className="senha" 
          placeholder="Digite sua senha" 
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} 
        />

        <button
          type="submit"
          disabled={cpf.length < 14}
          className="entrar-btn"
        >
          Entrar
        </button>
      </form>
      
      <h3 className="sem-cadastro">
        Não possui cadastro?{" "}
        <a
          target="_blank"
          href="https://login.recife.pe.gov.br/"
          rel="noreferrer"
        >
          Cadastre-se no Conecta Recife
        </a>
      </h3>
    </>
  );
}

export default Login;