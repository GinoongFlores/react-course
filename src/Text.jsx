import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
	const [text, setText] = useState("");

	// the useEffect is a function that will only run if the component is mounted
	// the reason why we use useEffect is because we want to run some code when the component is mounted
	useEffect(() => {
		// this console log will display multiple times because we enable the <React.StrictMode> which checks our useEffect function if it's running correctly. On, the console it mounts first, then unmount, then mount lastly to check if there are potential problems.
		console.log("Component is mounted");
		document.title = `Title: ${text}`;

		// the return function helps to unmount the component
		return () => {
			console.log("Component is unmounted");
		};
	}, [text]); // if we don't pass any arguments to the useEffect, it will run every time the component is rendered

	return (
		<div>
			<input
				onClick={(event) => {
					setText(event.target.value);
				}}
			/>

			<h1 style={{ color: "black" }}>{text}</h1>
		</div>
	);
};
