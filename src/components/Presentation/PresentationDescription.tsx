import { useRef }     from "react";
import   React        from "react";
import { useEffect }  from "react";
import { useOpacity } from "../../hooks";

export const PresentationDescription = () => {

  const descriptionRef = useRef<HTMLDivElement>(null);

  const { doOpacity } = useOpacity();

  useEffect(() => {

    if( descriptionRef.current ) {
      setTimeout( () => doOpacity([ descriptionRef ]), 1300 )
    }

  }, [doOpacity, descriptionRef])

  return (
    <div ref={descriptionRef} className="opacity-0 translate-y-[25px]" >
      <div className="flex mt-3 -ml-4 gap-3 p-3">
        <h2  className="text-1xl max-sm:text-base max-w-2xl text-slate-200">
        I write clean code and build exceptional digital experiences.
        </h2>
      </div>
    </div> 
  )
};
