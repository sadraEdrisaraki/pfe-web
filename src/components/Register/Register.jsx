import React, { useState } from "react";
import "./style.css";

import { Link } from "react-router-dom";

import Email from "components/SharedComponents/FormItems/Email";
import Password from "components/SharedComponents/FormItems/Password";
import ErrorMessage from "components/SharedComponents/FormItems/ErrorMessage";

const Register = ({
	handleAddParticipant,
	handleRoleChange,
	newRole,
	newEmail,
	setNewEmail,
	newPassword,
	setNewPassword,
	errorMessage,
}) => {
	return (
		<div className="register-page">
			<div className="register-container">
				<h1>S'inscrire</h1>
				<ErrorMessage errorMessage={errorMessage} />
				<form onSubmit={handleAddParticipant}>
					<Email newEmail={newEmail} setNewEmail={setNewEmail} />
					<Password
						inputLabel="Mot de passe"
						newPassword={newPassword}
						setNewPassword={setNewPassword}
					/>

					<Password
						inputLabel="Confirmer mot de passe"
						newPassword={newPassword}
						setNewPassword={setNewPassword}
					/>
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
