import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { handleErrorResponse } from "../../utils/SharedFunctions";

import QRCodeContext from "contexts/QRCodeContext";
import participantService from "services/ParticipantService.js";

import Login from "components/Login/Login";

const LoginContainer = () => {
	const [newEmail, setNewEmail] = useState("");
	const [isEmailInputInvalid, setIsEmailInputInvalid] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const { setLoggedIn, role } = useContext(QRCodeContext);

	const clearFormInputs = () => {
		setNewEmail("");
		setNewPassword("");
	};

	const clearErrorMessages = () => {
		setErrorMessage("");
		setIsEmailInputInvalid(false);
		setIsPasswordInputInvalid(false);
	};

	const saveToken = (response) => {
		localStorage.setItem("token", response);
		setLoggedIn(true);
		clearFormInputs();
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
		console.log("connexion:", newEmail, newPassword);
		login(newEmail, newPassword);
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
		return <Redirect to="/establishment"/>;
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
