import './capibas.css'

function Capibas() {
  return(
    <>
    {/*Tela de capibas*/}
    <div className='top-top-top-div'><h2><img src='https://cdn-icons-png.flaticon.com/512/1373/1373452.png' width='25' height='25'></img>&nbsp;&nbsp;&nbsp;Câmbio de Capibas</h2></div>
    <div className='funcionamento-div'><strong>Como funciona?</strong><div className='funcionamento-color-div'>
      <strong>Troque suas vacinas tomadas por moedas Capibas e resgate prêmios!</strong></div></div>
    <div className='msg-trocas-div'><h2>Opções de Troca Disponíveis</h2></div>
    <div className='trocas-div'>
      <div className='titulo-preco-div'>
        <strong>Pacote Inicial</strong>
        <div className='preco-troca-div'>200</div>
      </div>
    <p>2 vacinas</p>
    <h4>Vacinas Incluídas:</h4>
    <div className='nome-vacina-div'>BCG</div>
    <div className='nome-vacina-div'>Hepatite B</div>
    <div className='botao-troca-div'>Trocar por 200 Capibas</div>
    </div>
    <div className='trocas-div'>
      <div className='titulo-preco-div'>
      <strong>Pacote Infantil</strong>
      <div className='preco-troca-div'>350</div>
      </div>
    <p>3 vacinas</p>
    <h4>Vacinas Incluídas:</h4>
    <div className='nome-vacina-div'>Penta (DTP/Hib/Hepatite B)</div>
    <div className='nome-vacina-div'>Poliomielite (VIP)</div>
    <div className='nome-vacina-div'>Rotavírus</div>    
    <div className='botao-troca-div'>Trocar por 350 Capibas</div>
    </div>
    <div className='trocas-div'>
      <div className='titulo-preco-div'>
      <strong>Pacote Completo</strong>
      <div className='preco-troca-div'>550</div>
      </div>
    <p>5 vacinas</p>
    <h4>Vacinas Incluídas:</h4>
    <div className='nome-vacina-div'>Tríplice Viral</div>
    <div className='nome-vacina-div'>Tetra Viral</div>
    <div className='nome-vacina-div'>Varicela</div>
    <div className='nome-vacina-div'>Febre Amarela</div>
    <div className='nome-vacina-div'>HPV</div>
    <div className='botao-troca-div'>Trocar por 550 Capibas</div>
    </div>
    </>
  )
}
export default Capibas


