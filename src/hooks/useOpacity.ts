interface IReference {
  reference: any,
  classNameProperties?: string,
}

interface IParams {
  references: Array<IReference>;
  miliseconds?: number;
} 

export const useOpacity = ({ references, miliseconds }: IParams): void => {
  setTimeout(():void => {
    references.forEach((reference) => {
      const elementReference: HTMLElement = reference.reference.current;

      if(elementReference) {
        elementReference.className = `opacity-100 duration-[0.5s] ease-in-out ${reference.classNameProperties} `;
      } 
    })
  }, miliseconds)
};


export const useScroll = ({ references }: IParams): void => {
  references.forEach(reference => {
    const element: HTMLDivElement = reference.reference.current;

    if(element && element.getBoundingClientRect().top < window.innerHeight) {
      element.className = `opacity-100 duration-[1s] ease-in-out ${reference.classNameProperties}`;
    } 
  })
};