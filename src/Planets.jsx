const Planets = (props) => {
	return (
		<>
			<div>
				<h2>
					{props.planets} {props.isGasPlanet}
				</h2>
			</div>
		</>
	);
};

export default Planets;
