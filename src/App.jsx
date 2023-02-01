import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Users from "./User";

function App() {
	const planets = [
		{ name: "Mars", isGasPlanet: false },
		{ name: "Earth", isGasPlanet: false },
		{ name: "Jupiter", isGasPlanet: true },
		{ name: "Venus", isGasPlanet: false },
		{ name: "Neptune", isGasPlanet: true },
		{ name: "Uranus", isGasPlanet: true },
	];

	return (
		<div className="App">
			<>
				{/* Objective: Display only gas planets */}
				<h1>Gas Planets</h1>
				{planets.map((planet, key) => {
					return (
						<div>
							<h2 key={key}>{planet.isGasPlanet && planet.name}</h2>
						</div>
					);
				})}

				<h1>Is not a Gas Planet</h1>
				{planets.map((planet, keys) => {
					return (
						<div>
							<h2 key={keys}>{planet.isGasPlanet || planet.name}</h2>
						</div>
					);
				})}
			</>
		</div>
	);
}

export default App;
