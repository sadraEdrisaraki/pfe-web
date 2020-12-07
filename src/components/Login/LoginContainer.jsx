import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import participantService from "services/ParticipantService.js";

import Login from "components/Login/Login";
import { handleErrorResponse } from "../../utils/SharedFunctions";

const LoginContainer = () => {
	const [newEmail, setNewEmail] = useState("");
	const [isEmailInputInvalid, setIsEmailInputInvalid] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const saveToken = (response) => {
		localStorage.setItem("token", response);
		setLoggedIn(true)
		setNewEmail("");
		setNewPassword("");
	};

	const login = (email, password) => {
		const payload = {
			login: email,
			password: password,
		};
		participantService
			.login(payload)
			.then((response) => saveToken(response))
			.catch((error) =>
				handleErrorResponse(
					error,
					setErrorMessage,
					setIsEmailInputInvalid,
					setIsPasswordInputInvalid
				)
			);
	};

	const handleLogin = (event) => {
		event.preventDefault();
		console.log(
			"connexion:",
			newEmail,
			newPassword
		);
		login(newEmail, newPassword);
	};

	const clearErrorMessages = () => {
		setErrorMessage("")
		setIsEmailInputInvalid(false)
		setIsPasswordInputInvalid(false)
	}

	useEffect(() => {
		console.log("effect");
		const clearNotification = () => clearErrorMessages();
		const handler = setTimeout(clearNotification,5000);
		const abortHandler = () => clearTimeout(handler);
		return abortHandler;
	}, [errorMessage]);

	if (loggedIn) {
		return <Redirect to="/establishment"/>
	}

	return (
		<Login
			handleLogin={handleLogin}
			newEmail={newEmail}
			setNewEmail={setNewEmail}
			isEmailInputInvalid={isEmailInputInvalid}
			newPassword={newPassword}
			setNewPassword={setNewPassword}
			isPasswordInputInvalid={isPasswordInputInvalid}
			errorMessage={errorMessage}
		/>
	);
};

export default LoginContainer;
