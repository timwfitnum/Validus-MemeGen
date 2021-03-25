import React from "react";
import ReactDOM from "react-dom";
//The UI magical helper
import { ChakraProvider } from "@chakra-ui/react";
// Global config options for the fetching of data, therefore
// All swr hooks in App have fetcher option
import { SWRConfig } from "swr";
import "./assets/styles/index.css";

import App from "./App";
import fetcher from "./data/fetcher";

// didnt really understand this stuff - but google told me to do this to fix it
// StrictMode is some development stuff - can probably remove that at the end
// ChakraProdiver is required for the chakra imports to work properly. Removed them and errors
ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<SWRConfig value={{ fetcher }}>
				<App />
			</SWRConfig>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
// import React from "react";
// import ReactDOM from "react-dom";
// import html2canvas from "html2canvas";


// function App() {
//   const printPDF = () => {
//     const domElement = document.getElementById("parent");
//     html2canvas(domElement, {
//       onclone: document => {
//         document.getElementById("print").style.visibility = "hidden";
//       }
//     }).then(canvas => {
//       const imgData = canvas.toDataURL("image/png");
      
//       var a = document.createElement('a');
//       a.href = imgData;
//       a.download = "filename";
//       document.body.appendChild(a);
//       a.click();
//     });
//   };

//   return (
//     <div className="App">
//       <div id="parent"> 
//         <h1>Generate PDF</h1>
//         <img src="data:image/jpeg;base64,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" />
//         <p>Create a screenshot from the page, and put it in a PDF file.</p>
//         <p style={{ color: "red" }}>
//           *Open this page in new window and press the button.
//         </p>
//         <button id="print" onClick={printPDF}>
//           PRINT
//         </button>
//       </div>
      
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
