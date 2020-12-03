import React, { useState } from "react";
import {Redirect, useHistory} from 'react-router-dom'


import participantService from "services/ParticipantService.js";

import Login from "components/Login/Login";

const LoginContainer = () => {
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [redirectPath, setRedirectPath] = useState("")
	let history = useHistory()

    const login = (email, password) => {
		const payload = {
			email: email,
			password: password,
		};
		participantService.login(payload).then((response) => console.log(response));
		localStorage.setItem("testLocal","testdatainlocalstorage");
		// TO DO gestion erreurs -> handler middleware?
		// Localstorage
    };
    
	const handleLogin = (event) => {
		event.preventDefault()
		login(newEmail, newPassword);
		setRedirectPath("establishment")
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

	if(redirectPath === "establishment"){
		setRedirectPath("")
		history.push('/establishment')
		return <Redirect to="/register"/>
	}

	// TODO verifier le role afin de redirect correctement
	return (
        <Login handleLogin={handleLogin} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} newEmail={newEmail} newPassword={newPassword}/>
	);
};

export default LoginContainer;
