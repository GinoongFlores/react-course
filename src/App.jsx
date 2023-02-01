import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const names = ["Christian", "Hannah", "Jason", "Jaycon", "Philipp", "Paul"];

	return (
		<div className="App">
			<>
				{/* <h1>{names.toString()}</h1> */}
				{names.map((name, key) => {
					// a map method with a callback function. A callback function means that the function is called when the map method is called.

					return <h1 key={key}>{name}</h1>; // we can also pass here the key to remove the warning of not using it. But you cannot use the key as a prop in the child component.
				})}
			</>
		</div>
	);
}

const DisplayNames = () => {
	for (name of namesList) {
		<h1>names.Christian</h1>;
	}

	return <></>;
};

export default App;
