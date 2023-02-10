import { useState } from "react";

// here we are creating an interface that will be used to define data types of the props of the Person component. This is needed because we are using typescript and we need to define the data types of the props of the Person component. This is a good practice to follow when using typescript.
interface personProps {
	name: string;
	email: string;
	age: number;
	isMarried: boolean;
	friends: string[];
	// country?: string, // we can add a question mark ? to make the country prop optional
	country: Country; // we can also use the enum Country to define the data type of the country prop. Which the enum Country have a list of countries that we can choose from.
}

// in an enum with this example, we can have multiple values in a country
export enum Country {
	Philippines = "Philippines",
	NewZealand = "New Zealand",
	France = "France",
	number = 20,
}

export const Person = (props: personProps) => {
	// this is how we add a data type on a state
	// const [name, setName] = useState<string>("")

	return (
		<div>
			<>
				<h2>Name: {props.name}</h2>
				<h2>Email: {props.email}</h2>
				<h2>Age: {props.age}</h2>
				<h2>This person: {props.isMarried ? "is" : "is not"} Married</h2>
				<h2>List of Friends: </h2>
				{props.friends.map((friend: string) => {
					return <h2>{friend}</h2>;
				})}
				<h2>Country: {props.country}</h2>
			</>
		</div>
	);
};
