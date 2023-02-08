import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Person } from "./Person";

function App() {
	return (
		<div className="App">
			<Person
				name="Christian"
				email="christian@gmail.com"
				age={21}
				isMarried={false}
				friends={["Jason", "Jaycon", "Philipp"]}
			/>
		</div>
	);
}

export default App;
