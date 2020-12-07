import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import participantService from "services/ParticipantService.js";

import Login from "components/Login/Login";
import { handleErrorResponse } from "../../utils/SharedFunctions";

const LoginContainer = () => {
	const [newEmail, setNewEmail] = useState("");
	const [isEmailInputInvalid, setIsEmailInputInvalid] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [redirectPath, setRedirectPath] = useState("");
	let history = useHistory();

	//TODO redirect */* role
	const checkTokenAndRedirect = () => {
		if (localStorage.getItem("token")) {
			setRedirectPath("establishment");
		}
	};

	const saveToken = (response) => {
		localStorage.setItem("token", response);
		checkTokenAndRedirect();
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
		login(newEmail, newPassword);
		setNewEmail("");
		setNewPassword("");
	};

	const clearErrorMessages = () => {
		setErrorMessage("")
		setIsEmailInputInvalid(false)
		setIsPasswordInputInvalid(false)
	}

	useEffect(() => {
		console.log("effect");
		const clearNotification = () => clearErrorMessages();
		const handler = setTimeout(clearNotification, 10_000);
		const abortHandler = () => clearTimeout(handler);
		return abortHandler;
	}, [errorMessage]);

	if (redirectPath === "establishment") {
		setRedirectPath("");
		history.push("/establishment");
		return <Redirect to="/register" />;
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
