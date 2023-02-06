import { useState, useEffect } from "react";
import axios from "axios";

export const Sample1 = () => {
	const [name, setName] = useState("");
	const [predictedAge, setPredictedAge] = useState(null); // we can set this useState to null or an object to get all the data from the API

	const fetchAge = () => {
		axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
			setPredictedAge(response.data); // here we can set the response to data to get all the data from the API
		});
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="Enter any name"
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<br />
			<br />
			<button onClick={fetchAge}>Predict Age</button>

			<br />

			{/* we add question mark to get the specific data if its not null */}
			<h2>Name: {predictedAge?.name}</h2>
			<h2>Predicted Age: {predictedAge?.age} </h2>
			<h2>Count: {predictedAge?.count}</h2>
		</div>
	);
};
