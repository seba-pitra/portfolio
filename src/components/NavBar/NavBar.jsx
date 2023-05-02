import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav id="navbar" className="navbar">
      {
        pathname === "/"
        ? <div></div>
        :
        <div>
          <ul className="navbar-container"> 
            <li><Link className="nav-link active" to={"/"}>Home</Link></li>
            <li><Link className="nav-link" to={"/about"}>About</Link></li>
            <li><Link className="nav-link" to={"/"}>Resume</Link></li>
            <li><Link className="nav-link" to={"/"}>Services</Link></li>
            <li><Link className="nav-link" to={"/"}>Portfolio</Link></li>
            <li><Link className="nav-link" to={"/"}>Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </div>
      }
    </nav>
  )
}

export default NavBar;