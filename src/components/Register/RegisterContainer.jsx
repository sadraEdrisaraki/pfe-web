import React, { useContext, useState } from "react";

import participantService from "services/ParticipantService.js";

import Register from "components/Register/Register";

const RegisterContainer = (props) => {
	const [newRole, setNewRole] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");

    const addParticipant = (role, email, password) => {
		//TO DO traitement différent selon rôle?
		const payload = {
			email: email,
			password: password,
		};
		participantService
			.register(payload)
			.then((response) => console.log(response));
		// TO DO gestion erreurs -> handler middleware?
	};

	const handleAddParticipant = (event) => {
		event.preventDefault();
		addParticipant(newRole, newEmail, newPassword);
		setNewRole("");
		setNewEmail("");
		setNewPassword("");
		console.log(newRole, newEmail, newPassword)
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
		<Register
			handleAddParticipant={handleAddParticipant}
			handleRoleChange={handleRoleChange}
			handleEmailChange={handleEmailChange}
			handlePasswordChange={handlePasswordChange}
			newRole={newRole}
			newEmail={newEmail}
			newPassword={newPassword}
		/>
	);
};

export default RegisterContainer;
