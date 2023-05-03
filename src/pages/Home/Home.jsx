import { Github } from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import { Linkedin } from "react-bootstrap-icons"
import "./Home.css"

const Home = () => {
  return (
    <header className="flex h-screen justify-center items-center text-start relative ease-in-out duration-300 ">
      <div className="">
        <h3 className=" text-blue-400" >Hi, my name is</h3>
        <h1 className=" text-5xl text-slate-200  m-0 p-0 leading-none font-bold font-poppins">Sebastian Pitra</h1>
        <h2 className="text-2xl mt-5 text-slate-200">
          I am a passionate {" "}
          <span className="border-solid border-blue-400 border-b-2">developer</span> 
          {" "} from Argentine
        </h2>

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

        <div className="flex mt-3 -ml-4 gap-3 p-3 ">
          <Link to={"https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
            <Linkedin color="rgb(59 130 246)" size={"20px"}/> 
          </Link >
          <Link to={"https://github.com/seba-pitra"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
            <Github color="rgb(59 130 246)" size={"20px"} /> 
          </Link>
        </div>
      </div>
  </header>
  )
}

export default Home;