import PropTypes from "prop-types";

export const Person = (props) => {
	return (
		<div>
			<h2>Name: {props.name}</h2>
			<h2>Email: {props.email}</h2>
			<h2>Age: {props.age}</h2>
			<h2>This person: {props.isMarried ? "is" : "is not"} Married</h2>
			<h2>
				{props.friends.map((friend) => {
					<h1>{friend}</h1>;
				})}
			</h2>
		</div>
	);
};

// this specifies the type of data that is expected to be passed to the component.
Person.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	age: PropTypes.number,
	isMarried: PropTypes.bool,
	friends: PropTypes.arrayOf(PropTypes.string),
};
