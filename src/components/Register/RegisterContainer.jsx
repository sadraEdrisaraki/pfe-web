import React, { useContext, useState } from "react";

import participantService from "services/ParticipantService.js";

import Register from "components/Register/Register";

const RegisterContainer = (props) => {
	const [newRole, setNewRole] = useState("Doctor");
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const addParticipant = (role, email, password) => {
		const payload = {
			login: newEmail,
			password: newPassword,
			participant_Type: newRole,
		};
		participantService
			.register(payload)
			.then((response) => response)
			.catch((error) =>
				setErrorMessage(
					error.response.data.errors.Login[0] +
						error.response.data.errors.Password[0]
				)
			);
	};

	const handleAddParticipant = (event) => {
		event.preventDefault();
		addParticipant(newRole, newEmail, newPassword);
		setNewRole("");
		setNewEmail("");
		setNewPassword("");
		console.log(newRole, newEmail, newPassword);
	};

	const handleRoleChange = (event) => {
		console.log("role change:", event.target.value);
		setNewRole(event.target.value);
	};

	return (
		<Register
			handleAddParticipant={handleAddParticipant}
			handleRoleChange={handleRoleChange}
			newRole={newRole}
			newEmail={newEmail}
			setNewEmail={setNewEmail}
			newPassword={newPassword}
			setNewPassword={setNewPassword}
			errorMessage={errorMessage}
		/>
	);
};

export default RegisterContainer;
