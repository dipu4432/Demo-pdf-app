import { useState } from "react";
import { Document, Page } from "react-pdf";

const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>PDF Viewer</h2>

      <Document
        file="/pdfs/iesc112.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      <p>
        Page {pageNumber} of {numPages}
      </p>

      <button
        disabled={pageNumber <= 1}
        onClick={() => setPageNumber(pageNumber - 1)}
      >
        Previous
      </button>

      <button
        disabled={pageNumber >= numPages}
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PDFViewer;
