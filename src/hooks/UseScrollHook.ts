
export const useScroll = () => {
  const doScroll = (references: any) => {
    references.forEach( (reference:any) => {
      const element: HTMLDivElement = reference.current;
  
      if(element && element.getBoundingClientRect().top < window.innerHeight) {
        element.className += `opacity-100 duration-[1s] ease-in-out `;
      } 
    })
  } 

  return { doScroll }
};