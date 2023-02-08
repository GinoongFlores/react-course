import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Cat } from "./components/Cat";

function App() {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: true,
			},
		},
	});

	return (
		<div className="App">
			<QueryClientProvider client={client}>
				<Cat />
			</QueryClientProvider>
		</div>
	);
}

export default App;
