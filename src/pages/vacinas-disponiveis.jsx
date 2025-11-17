import '../css/tela-vacinas.css'
import Card from '../components/vacina'
import NavBar from '../components/navbar'

function Cards() {
    return(
        <>
            <NavBar/>
            <div className='tela-vacinas'>
                <Card className='tela-vacinas' nome='Dengue'
                texto='Se vacine contra a dengue'>Cards Component</Card>
            </div>
        </>
    )
}
export default Cards