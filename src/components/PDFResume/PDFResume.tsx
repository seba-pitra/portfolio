import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer: React.FC = () => {
  return (
    <>
      <h2>PDF Viewer</h2>
      <Document file="/ruta/al/archivo.pdf">
        <Page pageNumber={1} />
      </Document>
    </>
  );
};

export default PDFViewer;