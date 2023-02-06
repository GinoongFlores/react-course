import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

function App() {
	return (
		<div className="App">
			<img src={reactLogo} className="App-logo" alt="logo" />

			{/* Router specify where our routers are on our components or where can we access the react-router-dom in our components */}
			<Router>
				<Navbar />

				{/* Routes define all the specific routes destination */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/contact" element={<Contact />} />

					{/* we can add an asterisk to the path and an error message to the element to show none pages */}
					<Route path="*" element={<h1>404: Not Found</h1>} />
				</Routes>
			</Router>
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
