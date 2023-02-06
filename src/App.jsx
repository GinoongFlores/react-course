import reactLogo from "./assets/react.svg";
import "./App.css";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// A context is simply a container that contains all the states that we want to share across our components or group of components that shares the same state or values.
export const AppContext = createContext();

function App() {
	const [username, setUsername] = useState("Christian");

	// the useContext API helps to store all our states in one place and we can access them from any component in our app without the need to use prop drilling

	return (
		<div className="App">
			{/* We wrapped this Router with the AppContext with the .Provider as we are providing the data inside of the components */}

			{/* passed the state variable and function as values that we want to use*/}
			<AppContext.Provider value={{ username, setUsername }}>
				<img src={reactLogo} className="App-logo" alt="logo" />
				<Router>
					<Navbar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<h1>404: Not Found</h1>} />
					</Routes>
				</Router>
			</AppContext.Provider>
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
