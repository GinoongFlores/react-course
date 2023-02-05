import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [catFact, setCatFact] = useState("");
	// Fetch in Javascript
	// fetch("https://catfact.ninja/fact")
	// 	.then((response) => response.json())
	// 	.then((data) => setCatFact(data.fact));

	// We can easily fetch data using the Axios package

	// run this only once when the component is mounted to prevent infinite loop

	const fetchCatFact = () => {
		axios.get("https://catfact.ninja/fact").then((res) => {
			setCatFact(res.data.fact);
		});
	};

	useEffect(() => {
		fetchCatFact(); // we call the function here
	}, []); // we add an empty array to prevent infinite loop

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await axios.get("https://catfact.ninja/fact");
	// 	}
	// })

	return (
		<div className="App">
			<button onClick={fetchCatFact}>Generate Cat Fact</button>
			<p>{catFact}</p>
		</div>
	);
}

export default App;
