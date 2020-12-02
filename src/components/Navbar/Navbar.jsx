import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<span className="navbar-brand mb-0 h1">BlockCovid {process.env.REACT_APP_API_ENDPOINT}</span>
				<button type="button" className="btn btn-outline-warning">Deconnexion</button>
			</nav>
		</div>
	);
};

export default Navbar;