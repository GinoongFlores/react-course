import "./App.css";

import { useState } from "react";
// A state in react is a variable that stores data that can be changed

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					// an anonymous function is a function that doesn't have a name. It is used when you don't want to create a function and just want to use it once.
					setCount(count - 1);
					if (count === 0) {
						// set the count to 0 if it is less than 0
						setCount(0);
					}
				}}
			>
				Decrease
			</button>
			<button
				onClick={() => {
					setCount(0);
				}}
			>
				Reset
			</button>

			<br />
			{count}
		</div>
	);
}

export default App;
