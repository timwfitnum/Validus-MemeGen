import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
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