import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export const Exercise = () => {
	const [excuse, setExcuse] = useState("");

		// here we add an parameter of excuseCategory as a basis of the excuse category that we wanted to specify
	const fetchExcuse = (excuseCategory) => {
		axios
			.get(`https://excuser-three.vercel.app/v1/excuse/${excuseCategory}`) // then passed that parameter to the url
			.then((res) => {
				setExcuse(res.data[0].excuse);
				// console.log(res.data[0].excuse);
			});
	};

	return (
		<div className="App">
			<h2>Generate An Excuse</h2>

			<div className="exercise--buttons">
				{/* then, we passed an these three arguments to that parameter to named the specific category */}
				<button onClick={() => fetchExcuse("party")}>Party</button>
				<button onClick={() => fetchExcuse("family")}>Family</button>
				<button onClick={() => fetchExcuse("office")}>Office</button>
			</div>

			<h3>Excuse: {excuse}</h3>
		</div>
	);
};
