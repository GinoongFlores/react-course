import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			NAVBAR
			<br />
			{/* Link is used to navigate between pages. It's the same as an anchor or a tag. But Link/s will only inside of the Router tag*/}
			<Link to="/">Home</Link>
			<Link to="/menu">Menu</Link>
			<Link to={"/contact"}>Contact</Link>
		</div>
	);
};
