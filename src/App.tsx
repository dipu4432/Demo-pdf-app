import Inbox from './inbox';
import './App.css'
// import Front from './front';
// import ShowPPT from './showPPT';
// import Document from './document';
import { pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import PDFViewer from "./PDFViewer";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;


function App() {

  return (
    <>
      <h1>Demo App</h1>
      <Inbox />
      {/* <Front /> */}
      {/* <ShowPPT /> */}
      {/* <Document /> */}
      <PDFViewer />
    </>
  )
}

export default App
