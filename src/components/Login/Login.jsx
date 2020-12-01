import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import QRCodeContext from "../../contexts/QRCodeContext";

const Login = () => {
	const [newEmail, setNewEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const { login } = useContext(QRCodeContext);

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
		<div>
			<h1>Se connecter</h1>
			<form onSubmit={handleLogin}>
				<div>
					Email
					<input type="text" value={newEmail} onChange={handleEmailChange} />
				</div>
				<div>
					Password
					<input
						type="text"
						value={newPassword}
						onChange={handlePasswordChange}
					/>
				</div>
				<button type="submit">Se connecter</button>
			</form>
			<button type="submit">
				<Link to="/">S'inscrire</Link>
			</button>
		</div>
	);
};

export default Login;
