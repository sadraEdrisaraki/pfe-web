import React from "react";
import { FormattedMessage } from "react-intl";
import "./style.css";

import { Link } from "react-router-dom";

import Email from "components/SharedComponents/FormItems/Email";
import Password from "components/SharedComponents/FormItems/Password";
import ErrorMessage from "components/SharedComponents/FormItems/ErrorMessage";

const Login = ({
	handleLogin,
	newEmail,
	setNewEmail,
	newPassword,
	setNewPassword,
	errorMessage,
}) => {
	return (
			<div className="login-page">
				<div className="login-container">
					<h1><FormattedMessage id="loginFormTitleLabel"/></h1>
					<ErrorMessage errorMessage={errorMessage} />
					<form>
					<Email newEmail={newEmail} setNewEmail={setNewEmail} />
					<Password inputLabel={<FormattedMessage id="passwordInputLabel"/>}
							newPassword={newPassword}
							setNewPassword={setNewPassword}
						/>
						<button onClick={handleLogin}><FormattedMessage id="buttonSubmitLoginFormLabel"/></button>
					</form>
					<button type="submit">
						<Link to="/register"><FormattedMessage id="buttonRegisterLinkLabel"/></Link>
					</button>
				</div>
			</div>
	);
};

export default Login;
