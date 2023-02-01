import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Planets from "./Planets";

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
				<h1>Gas Planets - using props</h1>
				{planets.map((planet, key) => {
					{
						/* sample: using if statement */
						{
							/* if (planet.isGasPlanet) return <h1>{planet.name}</h1>; */
						}
					}

					return (
						<div>
							{/* Another example: <h2 key={key}>{planet.isGasPlanet && planet.name}</h2> */}
							<Planets key={key} planets={planet.isGasPlanet && planet.name} />
						</div>
					);
				})}

				<h1>Gas Planet - using map only</h1>
				{planets.map(
					(planet, key) => planet.isGasPlanet && <h2>{planet.name}</h2>
				)}

				<h1>Is not a Gas Planet</h1>
				{planets.map(
					(planet, key) => !planet.isGasPlanet && <h2>{planet.name}</h2>
				)}
			</>
		</div>
	);
}

export default App;
