import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import QRCodeContext from "../../contexts/QRCodeContext";

const Register = () => {
	const [newRole, setNewRole] = useState("");
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
		event.preventDefault();
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
		<div>
			<h1>S'inscrire</h1>
			<form onSubmit={handleAddParticipant}>
				<h4>Êtes-vous</h4>
				<div>
					<input
						type="radio"
						value="Médecin"
						checked={newRole === "Médecin"}
						onChange={handleRoleChange}
					/>
					Médecin
					<input
						type="radio"
						value="Établissement"
						checked={newRole === "Établissement"}
						onChange={handleRoleChange}
					/>
					Établissement
				</div>
				<div>
					Email
					<input type="text" value={newEmail} onChange={handleEmailChange} />
				</div>
				<div>
					Password
					<input
						type="text"
						value={newPassword}
						onChange={handlePasswordChange}
					/>
				</div>
				<button type="submit">S'inscrire</button>
			</form>
			<button type="submit">
				<Link to="/">Se connecter</Link>
			</button>
		</div>
	);
};

export default Register;
