import "./App.css";
import { useState } from "react";

function App() {
	const [showText, setShowText] = useState(false);

	return (
		<div className="App">
			<button onClick={() => setShowText(!showText)}>Show Text</button>

			{showText && <h2>Hello World</h2>}
		</div>
	);
}

export default App;
