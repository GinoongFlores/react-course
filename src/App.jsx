import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Users from "./User";

function App() {
	// const names = ["Christian", "Hannah", "Jason", "Jaycon", "Philipp", "Paul"];
	const users = [
		{
			name: "Christian",
			age: 21,
		},
		{
			name: "Hannah",
			age: 20,
		},
		{
			name: "Jason",
			age: 22,
		},
	];

	return (
		<div className="App">
			<>
				{/* {names.map((name, key) => {
					// a map method with a callback function. A callback function means that the function is called when the map method is called.

					return <h1 key={key}>{name}</h1>; // we can also pass here the key to remove the warning of not using it. But you cannot use the key as a prop in the child component.
				})} */}
				{users.map((user, key) => {
					return (
						<>
							{/* we need to call the user array's properties to get its values */}
							{/* {user.name} {user.age} */}

							{/* we can also pass the user array as a prop to the Users component */}
							<Users name={user.name} age={user.age} />
						</>
					);
				})}
			</>
		</div>
	);
}

export default App;
