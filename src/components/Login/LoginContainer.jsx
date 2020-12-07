import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import participantService from "services/ParticipantService.js";

import Login from "components/Login/Login";

const LoginContainer = () => {
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [redirectPath, setRedirectPath] = useState("");
	let history = useHistory();

	const login = (email, password) => {
		const payload = {
			login: email,
			password: password,
		};

		participantService
			.login(payload)
			.then((response) => {
				setRedirectPath("establishment");
			})
			.catch((error) =>
				setErrorMessage(
					error.response.data.errors.Login[0] +
						error.response.data.errors.Password[0]
				)
			);
		localStorage.setItem("testLocal", "testdatainlocalstorage");
	};

	const handleLogin = (event) => {
		event.preventDefault();
		login(newEmail, newPassword);
		setNewEmail("");
		setNewPassword("");
	};

	useEffect(() => {
		console.log("effect");
		const clearNotification = () => setErrorMessage("");
		const handler = setTimeout(clearNotification, 10_000);
		const abortHandler = () => clearTimeout(handler);
		return abortHandler;
	}, [errorMessage]);

	if (redirectPath === "establishment") {
		setRedirectPath("");
		history.push("/establishment");
		return <Redirect to="/register" />;
	}

	// TODO verifier le role afin de redirect correctement
	return (
		<Login
			handleLogin={handleLogin}
			newEmail={newEmail}
			setNewEmail={setNewEmail}
			newPassword={newPassword}
			setNewPassword={setNewPassword}
			errorMessage={errorMessage}
		/>
	);
};

export default LoginContainer;
