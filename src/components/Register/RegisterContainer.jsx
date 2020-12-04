import React, { useEffect, useState } from "react";

import participantService from "services/ParticipantService.js";

import Register from "components/Register/Register";

const RegisterContainer = (props) => {
	const [newRole, setNewRole] = useState("Doctor");
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
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
			.catch((error) => console.log(error.response.data.errors));
	};

	const handleAddParticipant = (event) => {
		event.preventDefault();
		addParticipant(newRole, newEmail, newPassword);
		setNewRole("");
		setNewEmail("");
		setNewPassword("");
		setPasswordConfirmed("");
		console.log(newRole, newEmail, newPassword);
	};

	const handleRoleChange = (event) => {
		console.log("role change:", event.target.value);
		setNewRole(event.target.value);
	};

	useEffect(() => {
		console.log("effect");
		const clearNotification = () => setErrorMessage("");
		const handler = setTimeout(clearNotification, 10_000);
		const abortHandler = () => clearTimeout(handler);
		return abortHandler;
	}, [errorMessage]);

	return (
		<Register
			handleAddParticipant={handleAddParticipant}
			handleRoleChange={handleRoleChange}
			newRole={newRole}
			newEmail={newEmail}
			setNewEmail={setNewEmail}
			newPassword={newPassword}
			setNewPassword={setNewPassword}
			passwordConfirmed={passwordConfirmed}
			setPasswordConfirmed={setPasswordConfirmed}
			errorMessage={errorMessage}
		/>
	);
};

export default RegisterContainer;
