import "./App.css";
import { useState, useEffect } from "react";
import { Text } from "./Text";

function App() {
	const [showText, setShowText] = useState(false);

	return (
		<div className="App">
			<button
				onClick={() => {
					setShowText(!showText);
				}}
			>
				Show Text
			</button>

			{/* the Text component will only be shown if the condition is true. The display of the Text component in our App component is an act of mounting. And clicking the button again to hide the Text component is an act of unmounting */}
			{showText && <Text />}
		</div>
	);
}

export default App;
