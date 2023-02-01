import "./App.css";

import { useState } from "react";
// A state in react is a variable that stores data that can be changed

function App() {
	// let age = 0;
	let [age, setAge] = useState(0); // the age is a variable that sets value and the setAge is the function that lets the age variable to be changed

	// Here we cannot change the value of age because react only rerender once. And React don't know that the value of age has changed and it will just display the default value of age which is 0. So we must use State to change the value of age.
	const increaseAge = () => {
		setAge(age + 1); // the age will change depending on the setAge function
		// age++;
		// document.getElementById("age").innerHTML = age; this is an old way of doing it in Javascript
		console.log(age);
	};

	return (
		<div className="App">
			{age}
			<br />
			{/* <h2 id="age"></h2> */}
			<button onClick={increaseAge}>Increase Age</button>
		</div>
	);
}

export default App;
