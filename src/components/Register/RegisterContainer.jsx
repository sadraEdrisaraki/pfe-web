import React, { useContext, useState } from "react";

import participantService from "services/ParticipantService.js";

import Register from "components/Register/Register";

const RegisterContainer = (props) => {
	const [newRole, setNewRole] = useState("medecin");
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");

    const addParticipant = (role, email, password) => {
		const payload = {
			login: newEmail,
			password: newPassword,
			participant_Type:newRole
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
		console.log("role change:", event.target.value);
		setNewRole(event.target.value);
	};

	const handleEmailChange = (event) => {
		setNewEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
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
