import React, { useContext, useState } from "react";
import "./style.css"

import { Link } from "react-router-dom";

const Login = ({handleLogin,handleEmailChange,handlePasswordChange,newEmail,newPassword}) => {

	return (
		<div className="login-page">
			<div className="login-container">
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
					<Link to="/register">S'inscrire</Link>
				</button>
			</div>
			
		</div>
	);
};

export default Login;
