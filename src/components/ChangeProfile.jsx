import { useState } from "react";

export const ChangeProfile = (props) => {
	const [newUsername, setNewUsername] = useState("");

	return (
		<div>
			<input
				type="text"
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			/>

			{/* here we have a prop of setUsername to be called on the Profile component that holds the state function of newUsername  */}
			<button onClick={() => props.setUsername(newUsername)}>
				Change Username
			</button>
		</div>
	);
};
