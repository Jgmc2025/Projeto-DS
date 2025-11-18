import RankingItem from "../components/RankingItem";
import { Link } from "react-router-dom";
import { bairrosData } from "../mockbairros";
import "../css/ListaRanking.css";
import { FaArrowLeft, FaChartLine } from "react-icons/fa";

function Ranking() {
  const listaOrdenada = [...bairrosData].sort((a, b) => {
    const porcentagemA = (a.vacinados / a.populacao) * 100;
    const porcentagemB = (b.vacinados / b.populacao) * 100;
    return porcentagemB - porcentagemA;
  });
  return (
    <div className="ranking-pag">
      <header className="header-topo">
        <Link to="/menu" className="botao-voltar">
          <FaArrowLeft />
        </Link>
        <h1>Voltar</h1>
      </header>

      {/* Conteúdo Principal */}
      <main className="conteudo-ranking">
        {/* Card do Título da Lista */}
        <div className="card-titulo-lista">
          <div className="icone-grafico">
            <FaChartLine style={{ color: "#1e3a8a", fontSize: "1.5rem" }} />
          </div>
          <div>
            <h2>Bairros de Recife</h2>
            <p>Ranking por porcentagem de vacinação</p>
          </div>
        </div>

        <div className="lista-bairros">
          {listaOrdenada.map((item, index) => (
            <RankingItem key={item.id} item={item} ranking={index + 1} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Ranking;
