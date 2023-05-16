import React from 'react';
import CVPDF from "../../assets/PDF/CV-sebastian-pitra.pdf"

const PDFResume: React.FC = () => {
  return (
    <div className=' overflow-hidden h-full w-full m-0 p-0 '>
      <embed src={CVPDF} type="application/pdf" className='h-[800px] w-full absolute top-0 left-0' />
    </div>
  )
};

export default PDFResume;