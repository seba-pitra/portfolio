import  About        from "../../components/About/About";
import  Presentation from "../../components/Presentation/Presentation";
import  React        from "react";

const Home: React.FC = () => {

  return (
    <>
      <Presentation>
        <Presentation.Introducing />
        <Presentation.Name />
        <Presentation.WhoAmI />
        <Presentation.Description />
        <Presentation.SocialMedia />
      </Presentation>

      <About>
        <About.Header />
        <About.Description />
        <About.SkillsCards />
        <About.Testimonials />
      </About>
    </>
  )
}

export default Home;