import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import QRCodeContext from "../../contexts/QRCodeContext";

const Register = ({handleAddParticipant,handleRoleChange,handleEmailChange,handlePasswordChange,newRole,newEmail,newPassword}) => {

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
