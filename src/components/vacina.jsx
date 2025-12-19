import "../css/tela-vacinas.css";

const CardVacina = ({ nome, pontos }) => {
  return (
    <div className="extrato-div">
      <div className="extrato-top">
        <strong>Vacina Registrada:</strong>
        <span>Capibas: {pontos}</span>
      </div>
      <div className="extrato-bottom">{nome}</div>
    </div>
  );
};

export default CardVacina;
