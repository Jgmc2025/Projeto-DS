import '../css/tela-vacinas.css'
import Card from '../components/vacina'
import NavBar from '../components/navbar'

function Cards() {
    return(
        <>
            <NavBar/>

            <div className='msg-div'>
                <h1>Histórico de Vacinas Tomadas</h1>
            </div>

            <div className='extrato-rolldown-div'>  

                {/* Card 1 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 50</span>
                    </div>
                    <div className='extrato-bottom'>
                        Gripe
                    </div>
                </div>

                {/* Card 2 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 100</span>
                    </div>
                    <div className='extrato-bottom'>
                        Poliomielite
                    </div>
                </div>

                {/* Card 3 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Tetraviral
                    </div>
                </div>

                {/* Card 4 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Rotavírus
                    </div>
                </div>

                {/* Card 5 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Rotavírus
                    </div>
                </div>

                {/* Card 6 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Rotavírus
                    </div>
                </div>

                {/* Card 7 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Rotavírus
                    </div>
                </div>

                {/* Card 8 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Rotavírus
                    </div>
                </div>

                {/* Card 9 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Rotavírus
                    </div>
                </div>

                {/* Card 10 */}
                <div className='extrato-div'>
                    <div className='extrato-top'>
                        <strong>Vacina Registrada:</strong>
                        <span>Capibas: 150</span>
                    </div>
                    <div className='extrato-bottom'>
                        Rotavírus
                    </div>
                </div>

            </div> 
        </>
    )
}

export default Cards
