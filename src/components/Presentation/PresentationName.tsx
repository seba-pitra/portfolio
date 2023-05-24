import { useRef }     from "react";
import   React        from "react";
import { useEffect }  from "react";
import { useOpacity } from "../../hooks";

export const PresentationName = () => {

  const nameRef = useRef<HTMLDivElement>(null);

  const { doOpacity } = useOpacity();

  useEffect(() => {

    if( nameRef.current ) {
      setTimeout( () => doOpacity([ nameRef ]), 1000 )
    }

  }, [doOpacity, nameRef])

  return (
    <div ref={nameRef} className="opacity-0 translate-y-[15px]">
      <h1 className=" text-7xl max-sm:text-5xl text-slate-200 mt-2  m-0 p-0 leading-none font-bold font-poppins">Sebastian Pitra</h1>
    </div>
  )
}
