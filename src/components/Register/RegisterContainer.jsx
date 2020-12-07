import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import participantService from "services/ParticipantService.js";

import Register from "components/Register/Register";
import { handleErrorResponse } from "../../utils/SharedFunctions";

const RegisterContainer = () => {
	const [newRole, setNewRole] = useState("Doctor");
	const [newEmail, setNewEmail] = useState("");
	const [isEmailInputInvalid, setIsEmailInputInvalid] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
	const [isPasswordConfirmedInputInvalid, setIsPasswordConfirmedInputInvalid] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	//TODO redirect */* role
	const checkTokenAndRedirect = () => {
		if (localStorage.getItem("token") !== null)
			<Redirect to="/establishment" />;
	};

	const saveToken = (response) => {
		localStorage.setItem("token", response);
		checkTokenAndRedirect();
	};

	const addParticipant = (role, email, password) => {
		const payload = {
			login: newEmail,
			password: newPassword,
			participant_Type: newRole,
		};
		participantService
			.register(payload)
			.then((response) => saveToken(response))
			.catch((error) => handleErrorResponse(
				error,
				setErrorMessage,
				setIsEmailInputInvalid,
				setIsPasswordInputInvalid
			));
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

	const clearErrorMessages = () => {
		setErrorMessage("")
		setIsEmailInputInvalid(false)
		setIsPasswordInputInvalid(false)
		setIsPasswordConfirmedInputInvalid(false)
	}

	useEffect(() => {
		console.log("effect");
		const clearNotification = () => clearErrorMessages();
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
			isEmailInputInvalid={isEmailInputInvalid}
			newPassword={newPassword}
			setNewPassword={setNewPassword}
			isPasswordInputInvalid={isPasswordInputInvalid}
			passwordConfirmed={passwordConfirmed}
			setPasswordConfirmed={setPasswordConfirmed}
			isPasswordConfirmedInputInvalid={isPasswordConfirmedInputInvalid}
			errorMessage={errorMessage}
		/>
	);
};

export default RegisterContainer;
