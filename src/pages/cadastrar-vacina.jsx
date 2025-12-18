import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import "../css/login.css";

// --- SUBCOMPONENTE: Card de Vacina ---
const VaccineCard = ({ vacina }) => {
  const dataFormatada = new Date(vacina.createdAt).toLocaleDateString("pt-BR");

  return (
    <div className="vaccine-card">
      <div className="vaccine-card-header">
        <span className={`status-badge ${vacina.ativo ? "active" : "inactive"}`}>
          {vacina.ativo ? "Ativa" : "Inativa"}
        </span>
        <span className="vaccine-date">{dataFormatada}</span>
      </div>
      <h4 className="vaccine-card-name">{vacina.nome}</h4>
      <div className="vaccine-card-footer">
        <small>ID: #{vacina.id}</small>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
function CadastrarVacina() {
  const navigate = useNavigate();
  const [nomeVacina, setNomeVacina] = useState("");
  const [listaVacinas, setListaVacinas] = useState([]);
  const [loading, setLoading] = useState(false);

  // Busca as vacinas no backend
  const buscarVacinas = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/vaccine", {
        withCredentials: true
      });
      setListaVacinas(response.data.vaccines);
    } catch (error) {
      console.error("Erro ao carregar vacinas:", error);
    }
  }, []);

  useEffect(() => {
    buscarVacinas();
  }, [buscarVacinas]);

  async function handleCadastro(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3000/api/vaccine", 
        { nome: nomeVacina }, 
        { withCredentials: true }
      );

      alert("Vacina cadastrada com sucesso!");
      setNomeVacina(""); 
      await buscarVacinas(); // Atualiza a lista automaticamente

    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert(error.response?.data?.message || "Erro ao cadastrar vacina.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-container">
      <div className="area-logo">
        <img src={logo} width="100" height="100" alt="Capivac Logo" />
        <h1>Capivac</h1>
      </div>

      <div className="main-content-flex">
        
        {/* LADO ESQUERDO: Formulário de Cadastro */}
        <section className="form-div side-panel">
          <h2 className="login">Nova Vacina</h2>
          <p className="description">Cadastre novas vacinas disponíveis no sistema de saúde.</p>
          
          <form onSubmit={handleCadastro}>
            <h3>Nome da Vacina</h3>
            <input
              className="senha"
              placeholder="Ex: Caxumba, Pfizer..."
              value={nomeVacina}
              onChange={(e) => setNomeVacina(e.target.value)}
              required
            />
            <button type="submit" className="entrar-btn" disabled={loading}>
              {loading ? "Processando..." : "Cadastrar Vacina"}
            </button>
            <button 
              type="button" 
              className="entrar-btn btn-secondary" 
              onClick={() => navigate(-1)}
            >
              Voltar ao Menu
            </button>
          </form>
        </section>

        {/* LADO DIREITO: Listagem de Vacinas */}
        <section className="form-div side-panel">
          <h2 className="login">Vacinas Cadastradas</h2>
          <div className="vaccine-list-container">
            {listaVacinas.length > 0 ? (
              listaVacinas.map((v) => <VaccineCard key={v.id} vacina={v} />)
            ) : (
              <p className="empty-message">Nenhuma vacina encontrada.</p>
            )}
          </div>
          <div className="list-footer">
            <span>Total: <strong>{listaVacinas.length}</strong> itens</span>
          </div>
        </section>

      </div>
    </div>
  );
}

export default CadastrarVacina;