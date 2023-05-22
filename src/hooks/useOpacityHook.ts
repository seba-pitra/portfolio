
export const useOpacity = () => {
  
  const doOpacity = (references: any) => {

    references.forEach((ref:any, index: number) => {
      const elementReference: HTMLElement = ref.current;
      const miliseconds = Number.parseInt(index + "15");
      
      if(elementReference) {
        setInterval(() =>  {
          elementReference.className = `opacity-100 duration-[0.5s] ease-in-out translate-y-0`
        }, miliseconds)
      }
    });

  }

  return { doOpacity }
};

