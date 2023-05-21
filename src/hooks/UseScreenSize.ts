import { useEffect } from "react";
import { useState }  from "react";


export const useScreenSize = () => {
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [height, width]);

  return { width, height }
};