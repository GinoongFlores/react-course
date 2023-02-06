import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
	// here to use the AppContext that we created in the App.jsx we use the useContext API to access the data that we want to use in this component and we can use it as a normal variable without using props.
	const { username } = useContext(AppContext);

	return (
		<header className="App-header">
			<h1>Welcome to the Home Page User: {username}</h1>
		</header>
	);
};
