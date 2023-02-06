import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
	return (
		<header className="App-header">
			<h2>Welcome to Profile Page User: {props.username}</h2>

			{/* here we passed the setUsername props from the ChangeProfile component and it's a function now that has a prop of seUsername to be call on the App component*/}
			<ChangeProfile setUsername={props.setUsername} />
		</header>
	);
};
