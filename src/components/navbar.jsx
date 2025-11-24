import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import "../css/navbar.css"

function NavBar() {
    const navigate = useNavigate();
    function Voltar(){
        navigate(-1); 
    };

    return(
        <div className="headernav">
          <h1 className='voltar'>
              <Link onClick={Voltar} className="botao-nav">
                  <FaArrowLeft />
              </Link>
              Menu
          </h1>
        </div>
    )
};
export default NavBar;