import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import "../css/login.css"; // Reaproveitando estilos de formulário

function AtualizarDados() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [bairro, setBairro] = useState("");
  const [cpf, setCpf] = useState(""); // CPF geralmente é apenas leitura, mas incluído conforme solicitado
  const [loading, setLoading] = useState(false);

  // Carregar dados atuais para preencher o formulário
  useEffect(() => {
    axios.get("http://localhost:3000/api/users", { withCredentials: true })
      .then(res => {
        setNome(res.data.nome);
        setEmail(res.data.email);
        setBairro(res.data.bairro);
        setCpf(res.data.cpf);
      })
      .catch(err => console.error("Erro ao carregar dados", err));
  }, []);

  async function handleAtualizar(event) {
    event.preventDefault();
    setLoading(true);

    const dadosParaEnviar = {
      cpf: cpf.replace(/\D/g, ""),
      nome: nome,
      email: email,
      bairro: bairro
    };

    try {
      await axios.put("http://localhost:3000/api/users", dadosParaEnviar, {
        withCredentials: true
      });
      alert("Dados atualizados com sucesso!");
      navigate("/menu-comum"); // Volta para o menu
    } catch (error) {
      console.error("Erro na atualização:", error);
      alert("Erro ao atualizar dados.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="area-logo">
        <img src={logo} width="125" height="125" alt="logo" />
        <h1>Capivac</h1>
      </div>

      <form className="form-div" onSubmit={handleAtualizar}>
        <h2 className="login">Atualizar Cadastro</h2>

        <h3>Nome Completo</h3>
        <input 
          className="senha" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />

        <h3>E-mail</h3>
        <input 
          type="email"
          className="senha" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <h3>Bairro</h3>
        <input 
          className="senha" 
          value={bairro} 
          onChange={(e) => setBairro(e.target.value)} 
          required 
        />

        <button type="submit" className="entrar-btn" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Alterações"}
        </button>
        
        <button type="button" className="entrar-btn" style={{backgroundColor: "#888", marginTop: "10px"}} onClick={() => navigate(-1)}>
          Cancelar
        </button>
      </form>
    </>
  );
}

export default AtualizarDados;