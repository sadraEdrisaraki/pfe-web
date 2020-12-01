import React, { useContext, useState } from "react";

import participantService from "services/ParticipantService.js";

import Login from "components/Login/Login";

const LoginContainer = () => {
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");

    const login = (email, password) => {
		const payload = {
			email: email,
			password: password,
		};
		participantService.login(payload).then((response) => console.log(response));
		// TO DO gestion erreurs -> handler middleware?
    };
    
	const handleLogin = (event) => {
		event.preventDefault();
		login(newEmail, newPassword);
		setNewEmail("");
		setNewPassword("");
	};

	const handleEmailChange = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	return (
        <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} newEmail={newEmail} newPassword={ newPassword}/>
	);
};

export default LoginContainer;
