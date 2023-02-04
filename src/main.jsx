import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	// React.StrictMode helps us to right better code by checking for problems in our code and giving us warnings in the console
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
