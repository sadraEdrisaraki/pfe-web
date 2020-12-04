import React,{useState} from "react";

const Navbar = () => {
	
	const handleLogout = () => {
		localStorage.setItem("token", null);
	}

	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<span className="navbar-brand mb-0 h1">BlockCovid {process.env.REACT_APP_API_ENDPOINT}</span>
				{ localStorage.getItem("datakey") === null ? <button type="button" className="btn btn-outline-warning" onClick={handleLogout}>Deconnexion</button> : ""}
			</nav>
		</div>
	);
};

export default Navbar;