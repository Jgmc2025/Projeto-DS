import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import "../css/login.css";

function AtualizarDados() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [bairro, setBairro] = useState("");
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);

  // Lista baseada no seu Enum
  const listaBairros = [
    "AFLITOS", "AFOGADOS", "AGUA_FRIA", "ALTO_JOSE_BONIFACIO", "ALTO_JOSE_DO_PINHO",
    "ALTO_DO_MANDU", "ALTO_DO_PASCOAL", "ALTO_SANTA_TEREZINHA", "APIPUCOS", "AREIAS",
    "ARRUDA", "BARRO", "BEBERIBE", "BENFICA", "BOA_VIAGEM", "BOA_VISTA", "BOMBA_DO_HEMETERIO",
    "BONGI", "BRASILIA_TEIMOSA", "BREJO_DO_BEBERIBE", "BREJO_DA_GUABIRABA", "CABANGA",
    "CACOTE", "CAJUEIRO", "CAMPINA_DO_BARRETO", "CAMPO_GRANDE", "CASA_AMARELA", "CASA_FORTE",
    "CAXANGA", "CIDADE_UNIVERSITARIA", "COELHOS", "COHAB", "COQUE", "COQUEIRAL", "CORDEIRO",
    "CORREGO_DO_JENIPAPO", "CURADO", "DERBY", "DOIS_IRMAOS", "DOIS_UNIDOS", "ENCRUZILHADA",
    "ENGENHO_DO_MEIO", "ENTRA_A_PULSO", "ESPINHEIRO", "ESTANCIA", "FUNDAO", "GRACAS",
    "GUABIRABA", "HIPODROMO", "IBURA", "ILHA_JOANA_BEZERRA", "ILHA_DO_LEITE", "ILHA_DO_RETIRO",
    "IMBIRIBEIRA", "IPSEP", "IPUTINGA", "JAQUEIRA", "JARDIM_SAO_PAULO", "JIQUIA", "JORDAO",
    "LINHA_DO_TIRO", "MACAXEIRA", "MADALENA", "MANGABEIRA", "MANGUEIRA", "MONTEIRO",
    "MORRO_DA_CONCEICAO", "MUSTARDINHA", "NOVA_DESCOBERTA", "PAISSANDU", "PARNAMIRIM",
    "PASSARINHO", "PAU_FERRO", "PEIXINHOS", "PINA", "POCO_DA_PANELA", "PONTE_D_UCHOA",
    "PONTO_DE_PARADA", "PORTO_DA_MADEIRA", "PRADO", "RECIFE", "ROSARINHO", "SAN_MARTIN",
    "SANCHO", "SANTANA", "SANTO_AMARO", "SANTO_ANTONIO", "SAO_JOSE", "SITIO_DOS_PINTOS",
    "SOLEDADE", "TAMARINEIRA", "TEJIPIO", "TORRE", "TORREAO", "TORROES", "TOTO", "VARZEA",
    "VASCO_DA_GAMA", "ZUMBI"
  ];

  // Função para deixar o nome bonito (ex: VASCO_DA_GAMA -> Vasco Da Gama)
  const formatarNomeBairro = (texto) => {
    return texto
      .toLowerCase()
      .split("_")
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(" ");
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/users", { withCredentials: true })
      .then(res => {
        setNome(res.data.nome);
        setEmail(res.data.email);
        setBairro(res.data.bairro); // Aqui virá o valor em string (ex: "VARZEA")
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
      bairro: bairro // Envia o valor do enum selecionado (ex: "VASCO_DA_GAMA")
    };

    try {
      await axios.put("http://localhost:3000/api/users", dadosParaEnviar, {
        withCredentials: true
      });
      alert("Dados atualizados com sucesso!");
      navigate("/menu-comum");
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

        <h3>Bairro em Recife</h3>
        <select 
          className="senha" // Reaproveitando sua classe de estilo para manter o visual
          style={{ width: '100%', height: '45px', marginBottom: '15px' }}
          value={bairro} 
          onChange={(e) => setBairro(e.target.value)} 
          required
        >
          <option value="" disabled>Selecione seu bairro</option>
          {listaBairros.map((b) => (
            <option key={b} value={b}>
              {formatarNomeBairro(b)}
            </option>
          ))}
        </select>

        <button type="submit" className="entrar-btn" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Alterações"}
        </button>
        
        <button 
          type="button" 
          className="entrar-btn" 
          style={{backgroundColor: "#888", marginTop: "10px"}} 
          onClick={() => navigate(-1)}
        >
          Cancelar
        </button>
      </form>
    </>
  );
}

export default AtualizarDados;