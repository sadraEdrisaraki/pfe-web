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
			email: email,
			password: password,
		};
		participantService
			.login(payload)
			.then((response) => console.log(response))
			.catch((error) => setErrorMessage(error));
		localStorage.setItem("testLocal", "testdatainlocalstorage");
	};

	const handleLogin = (event) => {
		event.preventDefault();
		login(newEmail, newPassword);
		//setRedirectPath("establishment");
		setNewEmail("");
		setNewPassword("");
	};

	useEffect(() => {
		console.log("effect");
		setTimeout(() => {
			setErrorMessage("");
		}, 10000);
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
