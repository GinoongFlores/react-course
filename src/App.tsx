import { Person, Country } from "./Person";
import "./App.css";

function App() {
	const getAge = (name: string): number => {
		// this defines a type of the parameter and a type of the return value which is a number
		return 21;
	};

	return (
		<div className="App">
			<Person
				name="Christian"
				email="christian@gmail.com"
				age={21}
				isMarried={false}
				friends={["Jason", "Jaycon", "Philipp"]}
				country={Country.France}
			/>
		</div>
	);
}

export default App;
