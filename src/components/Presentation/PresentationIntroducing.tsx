import { useRef }     from "react";
import   React        from "react";
import { useEffect }  from "react";
import { useOpacity } from "../../hooks";


export const PresentacionIntroducing = () => {

  const introducingRef = useRef<HTMLDivElement>(null);

  const { doOpacity } = useOpacity();

  useEffect(() => {

    if( introducingRef.current ) {
      setTimeout( () => doOpacity([ introducingRef ]), 1000 )
    }

  }, [doOpacity, introducingRef])


  return (
    <div ref={ introducingRef } className="opacity-0 translate-y-4" >
      <h3 className=" text-blue-400 " >Hi, my name is</h3>
    </div>
  )
};