import "../css/vacina.css";
import NavBar from "../components/navbar";
import CardVacina from "../components/vacina";

function TelaVacinas() {
  // Dados
  const listaVacinas = [
    { id: 1, nome: "Gripe", pontos: 100 },
    { id: 2, nome: "Poliomielite", pontos: 170 },
    { id: 3, nome: "Tetraviral", pontos: 150 },
    { id: 4, nome: "Rotavírus", pontos: 150 },
    { id: 5, nome: "Hepatite B", pontos: 150 },
    { id: 6, nome: "Febre Amarela", pontos: 150 },
    { id: 7, nome: "Sarampo", pontos: 120 },
    { id: 8, nome: "COVID-19", pontos: 200 },
    { id: 9, nome: "Tétano", pontos: 1000 },
    { id: 10, nome: "BCG", pontos: 150 },
    { id: 11, nome: "HPV", pontos: 500 },
    // Novas vacinas <-
  ];

  return (
    <>
      <NavBar />

      <div className="msg-div">
        <h1>Histórico de Vacinas Tomadas</h1>
      </div>

      <div className="extrato-rolldown-div">
        {/* loop */}
        {listaVacinas.map((vacina) => (
          <CardVacina
            key={vacina.id}
            nome={vacina.nome}
            pontos={vacina.pontos}
          />
        ))}
      </div>
    </>
  );
}

export default TelaVacinas;
