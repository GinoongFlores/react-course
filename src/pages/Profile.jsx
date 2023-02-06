import { ChangeProfile } from "../components/ChangeProfile";

import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
	const { username } = useContext(AppContext);

	return (
		<header className="App-header">
			<h2>Welcome to Profile Page User: {username}</h2>

			<ChangeProfile />
		</header>
	);
};
