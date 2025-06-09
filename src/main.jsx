import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<ContextProvider>
				<App />
			</ContextProvider>
		</Router>
	</React.StrictMode>
);
