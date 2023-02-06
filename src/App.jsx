import reactLogo from "./assets/react.svg";
import "./App.css";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [username, setUsername] = useState("Christian");

	// the useContext API helps to store all our states in one place and we can access them from any component in our app without the need to use prop drilling

	return (
		<div className="App">
			{/* We wrapped this Router with the AppContext with the .Provider as we are providing the data inside of the components */}

			<img src={reactLogo} className="App-logo" alt="logo" />
			{/* Router specify where our routers are on our components or where can we access the react-router-dom in our components */}
			<Router>
				<Navbar />

				{/* Routes define all the specific routes destination */}
				<Routes>
					{/* here we passed the username state as a prop to the Home and Profile component so they can have access into it */}
					<Route path="/" element={<Home username={username} />} />

					{/* here we passed the setUsername from the props of Profile component and now it holds the setUsername state function*/}
					<Route
						path="/profile"
						element={<Profile username={username} setUsername={setUsername} />}
					/>
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
