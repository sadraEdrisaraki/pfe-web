import React, { useContext, useState } from "react";
import "./style.css"

import { Link } from "react-router-dom";
import Email from "components/SharedComponents/FormItems/Email";
import Password from "components/SharedComponents/FormItems/Password";
import ErrorMessage from "components/SharedComponents/FormItems/ErrorMessage";

const Login = ({handleLogin,newEmail,setNewEmail,newPassword,setNewPassword,errorMessage}) => {

	return (
		<div className="login-page">
			<div className="login-container">
				<h1>Se connecter</h1>
				<ErrorMessage errorMessage={errorMessage}/>
				<form>
					<Email newEmail={newEmail} setNewEmail={ setNewEmail}/>
					<Password newPassword={newPassword} setNewPassword={ setNewPassword} />
					<button onClick={handleLogin}>Se connecter</button>
				</form>
				<button type="submit">
					<Link to="/register">S'inscrire</Link>
				</button>
			</div>
		</div>
	);
};

export default Login;
