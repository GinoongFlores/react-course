import reactLogo from "./assets/react.svg";
import "./App.css";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
	return (
		<div className="App">
			<img src={reactLogo} className="App-logo" alt="logo" />
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

// here we doing a thing called prop drilling which is not a good practice because the data is passed down from a higher-level component to a lower-level component through intermediate components that don't use the data. This makes the code harder to read and maintain.
// const TopComponent = () => {
// 	const [state, setState] = useState();
// 	return (
// 		<div>
// 			<MiddleComponent state={state} />
// 		</div>
// 	);
// };

// const MiddleComponent = (state) => {
// 	return (
// 		<div>
// 			<BottomComponent state={state} />
// 		</div>
// 	);
// };

// const BottomComponent = (state) => {
// 	return <div>{state}</div>;
// };
