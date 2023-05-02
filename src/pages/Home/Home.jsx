import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import { Linkedin } from "react-bootstrap-icons"
import { Github } from "react-bootstrap-icons"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header id="header">
      <div className="container">
        <h3 className="home-presentation-name" >Hi, my name is</h3>
        <h1>Sebastian Pitra</h1>
        <h2>I am a passionate <span>developer</span> from Argentine</h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link active" to={"/"}>Home</Link></li>
            <li><Link className="nav-link" to={"/about"}>About</Link></li>
            <li><Link className="nav-link" to={"/"}>Resume</Link></li>
            <li><Link className="nav-link" to={"/"}>Services</Link></li>
            <li><Link className="nav-link" to={"/"}>Portfolio</Link></li>
            <li><Link className="nav-link" to={"/"}>Contact</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="social-links">
          <Link to={"https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"} target="_blank"> <Linkedin /> </Link>
          <Link to={"https://github.com/seba-pitra"} target="_blank"> <Github /> </Link>
        </div>
      </div>
  </header>
  )
}

export default Home;