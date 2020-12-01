import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import QRCodeContext from "../../contexts/QRCodeContext";
import "./style.css"

const Register = () => {
	const [newRole, setNewRole] = useState("medecin");
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const { addParticipant } = useContext(QRCodeContext);

	const handleAddParticipant = (event) => {
		event.preventDefault();
		addParticipant(newRole, newEmail, newPassword);
		setNewRole("");
		setNewEmail("");
		setNewPassword("");
	};

	const handleRoleChange = (event) => {
		console.log("role change:", event.target.value);
		setNewRole(event.target.value);
	};

	const handleEmailChange = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	return (
		<div className="register-page">
			<div className="register-container">
				<h1>S'inscrire</h1>
				<form onSubmit={handleAddParticipant}>
					<div className="mail">
						<input 
							className="mail-input"
							type="text" 
							value={newEmail} 
							onChange={handleEmailChange} 
							placeholder="adresse mail..."
						/>
					</div>
					<div className="passwd">
						<input
							className="passwd-input"
							type="text"
							value={newPassword}
							onChange={handlePasswordChange}
							placeholder="mot-de-passe..."
						/>
					</div>
					<button className="btn-register" type="submit">S'inscrire</button>
					<h4>Êtes-vous</h4>
					<div>
						<input
							type="radio"
							value="medecin"
							checked={newRole === "medecin"}
							onChange={handleRoleChange}
							name="role"
						/>
						Médecin
						<input
							type="radio"
							value="etablissement"
							checked={newRole === "etablissement"}
							onChange={handleRoleChange}
							name="role"
						/>
						Établissement
					</div>
				</form>
				<br/>
				<button type="submit">
					<Link to="/">Se connecter</Link>
				</button>
			</div>
		</div>
	);
};

export default Register;
