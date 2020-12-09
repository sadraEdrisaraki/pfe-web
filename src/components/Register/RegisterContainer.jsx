import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { handleErrorResponse } from "../../utils/SharedFunctions";

import QRCodeContext from "contexts/QRCodeContext";
import participantService from "services/ParticipantService.js";

import Register from "components/Register/Register";

const RegisterContainer = () => {
	const [newRole, setNewRole] = useState("Doctor");
	const [newEmail, setNewEmail] = useState("");
	const [isEmailInputInvalid, setIsEmailInputInvalid] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
	const [
		isPasswordConfirmedInputInvalid,
		setIsPasswordConfirmedInputInvalid,
	] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const { setLoggedIn, role } = useContext(QRCodeContext);

	const clearFormInputs = () => {
		setNewRole("Doctor");
		setNewEmail("");
		setNewPassword("");
		setPasswordConfirmed("");
	};

	const clearErrorMessages = () => {
		setErrorMessage("");
		setIsEmailInputInvalid(false);
		setIsPasswordInputInvalid(false);
		setIsPasswordConfirmedInputInvalid(false);
	};

	const saveToken = (response) => {
		localStorage.setItem("token", response);
		setLoggedIn(true);
		clearFormInputs();
	};

	const addParticipant = (role, email, password, passwordConfirmed) => {
		const payload = {
			login: email,
			password: password,
			confirmPassword: passwordConfirmed,
			participant_Type: role,
		};
		participantService
			.register(payload)
			.then((response) => saveToken(response))
			.catch((error) =>
				handleErrorResponse(
					error,
					setErrorMessage,
					setIsEmailInputInvalid,
					setIsPasswordInputInvalid,
					setIsPasswordConfirmedInputInvalid
				)
			);
	};

	const handleAddParticipant = (event) => {
		event.preventDefault();
		console.log(
			"inscription:",
			newRole,
			newEmail,
			newPassword,
			passwordConfirmed
		);
		addParticipant(newRole, newEmail, newPassword, passwordConfirmed);
	};

	const handleRoleChange = (event) => {
		console.log("role change:", event.target.value);
		setNewRole(event.target.value);
	};

	useEffect(() => {
		console.log("effect");
		const clearNotification = () => clearErrorMessages();
		const handler = setTimeout(clearNotification, 10000);
		const abortHandler = () => clearTimeout(handler);
		return abortHandler;
	}, [errorMessage]);

	if (role === "Doctor") {
		console.log("redirigé => doctor");
		return <Redirect to="/doctor" />;
	} else if (role === "Establishment") {
		console.log("redirigé => establishment");
		return <Redirect to="/establishment" />;
	}

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
