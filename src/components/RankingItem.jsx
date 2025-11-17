const RankingItem = (props) => {
  const porcentagem_vacinacao = Math.round(
    (props.item.vacinados / props.item.populacao) * 100
  );

  return (
    <div className="ranking-item-container">
      {/* Coluna 1: Posição */}
      <div className="posicao">{props.item.ranking}º</div>
      {/* Coluna 2: Infos do Bairro */}
      <div className="info-bairro">
        <h3>{props.item.nome}</h3>
        <div className="barra-progresso-container">
          <div
            className="barra-progresso"
            style={{ width: `${porcentagem_vacinacao}%` }}
          ></div>
        </div>
        {/* Coluna 3: Porcentagem */}
        <div className="porcentagem">{porcentagem_vacinacao}%</div>
      </div>
    </div>
  );
};

export default RankingItem;
