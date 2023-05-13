import React from 'react';
import CVPDF from "../../assets/PDF/CV-sebastian-pitra.pdf"

const PDFResume: React.FC = () => {
  return (
    <embed src={CVPDF} type="application/pdf" className='h-[720px] w-full absolute top-0 left-0 overflow-hidden' />
  )
};

export default PDFResume;