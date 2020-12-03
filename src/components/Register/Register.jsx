import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Register = ({
	handleAddParticipant,
	handleRoleChange,
	handleEmailChange,
	handlePasswordChange,
	newRole,
	newEmail,
	newPassword,
}) => {
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
					<div>
						Confirm Password
						<input
							type="text"
							/*value={newPassword}
							onChange={handlePasswordChange}*/
						/>
					</div>
					<button className="btn-register" type="submit">
						S'inscrire
					</button>
					<h4>Êtes-vous</h4>
					<div>
						<input
							type="radio"
							value="Doctor"
							checked={newRole === "Doctor"}
							onChange={handleRoleChange}
							name="role"
						/>
						Médecin
						<input
							type="radio"
							value="Establishment"
							checked={newRole === "Establishment"}
							onChange={handleRoleChange}
							name="role"
						/>
						Établissement
					</div>
				</form>
				<br />
				<button type="submit">
					<Link to="/">Se connecter</Link>
				</button>
			</div>
		</div>
	);
};

export default Register;
