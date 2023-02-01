import "./App.css";

import { useState } from "react";
// A state in react is a variable that stores data that can be changed

function App() {
	// const [inputValue, setInputValue] = useState("");
	// const [showText, setShowText] = useState(true);
	const [textColor, setTextColor] = useState("black");

	const handleInputChange = (e) => {
		// an event is used to grab the information in the input

		setInputValue(e.target.value); // this is how we change the state. We used the setInputValue function to change to value of the inputValue state or variable
		// console.log(e.target.value)
	};

	return (
		<div className="App">
			{/* <input type="text" onChange={handleInputChange} /> {inputValue} */}
			<button
				onClick={() => {
					// setShowText(!showText); // here we used an anonymous function and change the text by setting the opposite of the showText boolean value

					setTextColor(textColor === "black" ? "red" : "black"); // here we used ternary operator to change the text color behavior into black if its red and vice versa
				}}
			>
				Show / Hide
			</button>

			{/* {showText && <h1>Hello World</h1>} */}
			<h1 style={{ color: textColor }}>Hello! I'm Christian!</h1>
		</div>
	);
}

export default App;
