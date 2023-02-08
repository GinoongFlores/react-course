import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* here we can pass a parameter prev that can be a reference to the isVisible variable.*/}
			<button onClick={() => setIsVisible((prev) => !prev)}>
				{/* here the default value of button is `Show` until the user clicks the button that makes it to true that displays the `Hidden text that also displays the h1 tag below */}
				{isVisible ? "Hidden" : "Show"}
			</button>

			{isVisible && <h1>Hidden Text</h1>}
		</div>
	);
}

export default App;
