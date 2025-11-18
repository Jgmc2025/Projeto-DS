import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import "../css/navbar.css"

function NavBar() {

    return(
        <div className="headernav">
          <h1 className='voltar'>
                <Link to="/menu" className="botao-voltar">
                    <FaArrowLeft />
                </Link>
              Voltar</h1>
        </div>
    )
};

export default NavBar