import NavBar from "../../components/NavBar/NavBar";
import "./About.css"
import profile from "../../img/profile.jpg"
import SkillsCards from "../../components/SkillsCards/SkillsCards";

const About = () => {
  return (
    <section id="about" className="about">

    <div className="about-me">
      <div className="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>

      <div className="about-me-container">
        <img src={profile} className="img-fluid" alt="profile_picture" />
        <div className="content" data-aos="fade-left">
          <h3>Full Stack Web Developer</h3>
          <p className="about-me-presentation">
          I am a Full Stack Developer focused on creating clean and high-quality code. I consider myself a highly proactive and 
          collaborative person, capable of working effectively in a team to meet project goals and exceed client expectations.
          <br />
          <br />
          In addition, dedication and agile learning are values that I always apply in my daily work, 
          allowing me to deliver high-quality results in a short time frame. 
          I am always willing to face new challenges and contribute to the success of the organization where I collaborate.
          </p>
        </div>
      </div>

      <SkillsCards />

    </div>
    </section>
  )
}

export default About;