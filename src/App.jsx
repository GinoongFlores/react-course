import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<></>
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
