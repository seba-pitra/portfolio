interface IReference {
  reference: any,
  classNameProperties?: string,
}

interface useOpacityProps {
  references: Array<IReference>;
  miliseconds: number;
} 

export const useOpacity = ({ references, miliseconds }: useOpacityProps) => {
  setTimeout(() => {
    references.forEach(reference => {
      const elementReference = reference.reference.current;

      if(elementReference) {
        elementReference.className = `opacity-100 duration-[0.7s] ease-in-out ${reference.classNameProperties} `;
      } 
    })
  }, miliseconds)
};