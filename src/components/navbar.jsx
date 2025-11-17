import { Link } from "react-router-dom"
import "../css/navbar.css"
function NavBar() {

    return(
        <div className="navbar">
            <div className="navbar-link">
                <Link to="/menu" className="nav-link"><img className="home-img" src="https://www.nicepng.com/png/full/17-178841_home-png-home-icon-free.png"/></Link>
            </div>
        </div>
    )
}
export default NavBar