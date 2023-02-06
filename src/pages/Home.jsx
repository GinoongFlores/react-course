import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
	// the first argument is the key or the unique id and the second argument is the function that will be called to fetch the data from the API or the database.

	// the data here is the data that is returned from the API or the database. It acts as a state
	const { data, isLoading, isError } = useQuery(["cat"], () => {
		return Axios.get("https://catfact.ninja/facts").then((res) => res.data);
	});

	// the isLoading is a boolean value that tells if the data is still loading or not. It sets to true in this case.
	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>Sorry, there was an error.</h1>;
	}

	return (
		<header className="App-header">
			<h1>Welcome to the Home Page</h1>

			{/* we need to add a question mark (?) on the data as the data is null initially. Adding, the ? tells to access the fact only if the data is not null. */}
			<p>{data?.fact}</p>
		</header>
	);
};
