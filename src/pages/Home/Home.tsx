import  About         from "../../components/About/About";
import  Presentation  from "../../components/Presentation/Presentation";
import  React         from "react";
import { useRef }     from "react";
import { useOpacity } from "../../hooks";

const Home: React.FC = () => {
  const containerRef    = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  const nameRef         = useRef<HTMLDivElement>(null);
  const whoAmIRef       = useRef<HTMLDivElement>(null);
  const socialMediaRef  = useRef<HTMLDivElement>(null);
  const descriptionRef  = useRef<HTMLDivElement>(null);

  useOpacity({
    miliseconds: 2000,
    references: [
    { reference: containerRef },
    { reference: presentationRef }, 
    { reference: whoAmIRef }, 
    {
      reference: nameRef,
      classNameProperties: "text-5xl text-slate-200  m-0 p-0 leading-none font-bold font-poppins",
    }, 
    {
      reference: descriptionRef,
      classNameProperties: "flex mt-3 -ml-4 gap-3 p-3",
    },
    {
      reference: socialMediaRef,
      classNameProperties: "flex mt-3 -ml-4 gap-3 p-3",
    }, 
  ]
  })

  return (
    <div>
      <Presentation />

      <About />
    </div>
  )
}

export default Home;