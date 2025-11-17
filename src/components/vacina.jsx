import '../css/vacina.css'

function Card(propriedade){
    return(
        <>
            <div className='card-vacina'><h2>Vacina da {propriedade.nome}</h2>
            <p className='texto-vacina'>{propriedade.texto}</p></div>
        </>
    )
}
export default Card;