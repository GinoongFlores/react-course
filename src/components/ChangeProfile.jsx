import { useState } from "react";

import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
	const [newUsername, setNewUsername] = useState("");
	const { setUsername } = useContext(AppContext); // here we just only the setUsername function from the App component to be used in this component to change the username state.

	return (
		<div>
			<input
				type="text"
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			/>

			{/* here we then passed the setUsername using the useContext API to get the new username */}
			<button onClick={() => setUsername(newUsername)}>Change Username</button>
		</div>
	);
};
