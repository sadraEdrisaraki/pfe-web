import React,{useContext,useState} from "react";
import QRCodeContext from "contexts/QRCodeContext";

const Navbar = () => {
	const { language,setLanguage } = useContext(QRCodeContext);

	const handleLogout = () => {
		localStorage.setItem("token", null);
	}

	const handleLanguageChange = (event) => {
		event.preventDefault();
		setLanguage(event.target.value);
	}

	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<span className="navbar-brand mb-0 h1">BlockCovid {process.env.REACT_APP_API_ENDPOINT}</span>
				{ localStorage.getItem("datakey") === null ? <button type="button" className="btn btn-outline-warning" onClick={handleLogout}>Deconnexion</button> : ""}
				<select value={language} onChange={handleLanguageChange}>
			<option value="fr">Français</option>
			<option value="en">Anglais</option>
			<option value="nl">Néerlandais</option>
		</select>
			</nav>
		</div>
	);
};

export default Navbar;