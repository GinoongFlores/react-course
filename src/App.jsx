import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { Navbar } from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// we can rename imports by adding "as" keyword

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
