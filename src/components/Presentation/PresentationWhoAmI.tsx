import { useRef }     from "react";
import   React        from "react";
import { useEffect }  from "react";
import { useOpacity } from "../../hooks";

export const PresentationWhoAmI = () => {

  const whoAmIRef = useRef<HTMLDivElement>(null);

  const { doOpacity } = useOpacity();

  useEffect(() => {

    if( whoAmIRef.current ) {
      setTimeout( () => doOpacity([ whoAmIRef ]), 1300 )
    }

  }, [doOpacity, whoAmIRef])

  return (
    <div ref={whoAmIRef} className="opacity-0 translate-y-[20px]" >
      <h2  className="text-4xl max-sm:text-2xl mt-5 text-slate-200">
        I'm a passionate {" "}
        <span className="border-solid border-blue-400 border-b-2">developer</span> 
        {" "} from Argentine
      </h2>
    </div>
  )
}
