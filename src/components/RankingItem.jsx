import React from "react";
import "../css/RankingItem.css";
import { FaTrophy } from "react-icons/fa";

const RankingItem = (props) => {
  const porcentagem_vacinacao = Math.round(
    (props.item.vacinados / props.item.populacao) * 100
  );

  // LÓGICA DOS ÍCONES
  let iconePosicao;

  if (props.ranking === 1) {
    // 1º Lugar: Troféu Dourado
    iconePosicao = <FaTrophy style={{ color: "#FFD700" }} />; // Gold
  } else if (props.ranking === 2) {
    // 2º Lugar: Troféu Prateado
    iconePosicao = <FaTrophy style={{ color: "#C0C0C0" }} />; // Silver
  } else if (props.ranking === 3) {
    // 3º Lugar: Troféu Bronze
    iconePosicao = <FaTrophy style={{ color: "#CD7F32" }} />; // Bronze
  } else {
    // Do 4º em diante: Apenas o número
    iconePosicao = `${props.ranking}º`;
  }

  return (
    <div className="ranking-item-container">
      <div className="posicao">{iconePosicao}</div>

      <div className="info-bairro">
        <h3>{props.item.nome}</h3>

        <div className="barra-progresso-container">
          <div
            className="barra-progresso"
            style={{ width: `${porcentagem_vacinacao}%` }}
          ></div>
        </div>
      </div>

      <div className="porcentagem">{porcentagem_vacinacao}%</div>
    </div>
  );
};

export default RankingItem;
