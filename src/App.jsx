import reactLogo from "./assets/react.svg";
import "./App.css";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
	// as example the query is the read from the CRUD and the mutation is the CUD from the CRUD.
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // this stops the API from fetching again whenever we switch tabs
		},
	},
});

function App() {
	return (
		<div className="App">
			<img src={reactLogo} className="App-logo" alt="logo" />

			{/* here we wrapped all the routes with the QueryClientProvider that also calls the client. It's the same thing as what we do in AppContextProvider  */}
			<QueryClientProvider client={client}>
				<Router>
					<Navbar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<h1>404: Not Found</h1>} />
					</Routes>
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;