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
