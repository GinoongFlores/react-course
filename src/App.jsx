import reactLogo from "./assets/react.svg";
import "./App.css";
import { useToggle } from "./useToggle";

function App() {
	// the isVisible is the reference of the state the same with the toggle function that we return from the useToggle custom hook.
	const [isVisible, toggle] = useToggle();
	const [isVisible1, toggle1] = useToggle(); // we can use the same custom hook for multiple states.

	// const {state: isVisible, toggle} = useToggle(); here we can destructure the state and the toggle function from the useToggle custom hook.

	return (
		<div className="App">
			{/* here we can pass a parameter prev that can be a reference to the isVisible variable.*/}
			<button onClick={toggle}>
				{/* here the default value of button is `Show` until the user clicks the button that makes it to true that displays the `Hidden text that also displays the h1 tag below */}
				{isVisible ? "Hidden" : "Show"}
			</button>

			<button onClick={toggle1}>{isVisible1 ? "Hidden" : "Show"}</button>

			{isVisible && <h1>Hidden Text</h1>}
			<br />

			{isVisible1 && <h1>Hidden Another Text</h1>}
		</div>
	);
}

export default App;
