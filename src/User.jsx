const Users = (props) => {
	return (
		<>
			<div>
				{/* here we can use props as an parameter as a reference of the user's array */}
				{props.name} {props.age}
			</div>
		</>
	);
};

export default Users;
