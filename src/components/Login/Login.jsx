import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "./style.css";

import Email from "components/SharedComponents/FormItems/Email";
import Password from "components/SharedComponents/FormItems/Password";
import ErrorMessage from "components/SharedComponents/FormItems/ErrorMessage";

const Login = ({
	handleLogin,
	newEmail,
	setNewEmail,
	isEmailInputInvalid,
	newPassword,
	setNewPassword,
	isPasswordInputInvalid,
	errorMessage,
}) => {
	return (
		<div className="login-page">
			<div className="login-container">
				<h1>
					<FormattedMessage id="loginFormTitleLabel" />
					</h1>
				<ErrorMessage errorMessage={errorMessage} />
				<form>
					<Email
						newEmail={newEmail}
						setNewEmail={setNewEmail}
						isEmailInputInvalid={isEmailInputInvalid}
					/>
					<Password
						inputLabel={<FormattedMessage id="passwordInputLabel" />}
						newPassword={newPassword}
						setNewPassword={setNewPassword}
						isPasswordInputInvalid={isPasswordInputInvalid}
					/>
					<button className="btn-success" onClick={handleLogin}>
						<FormattedMessage id="buttonSubmitLoginFormLabel" />
					</button>
				</form>
				<br />
				<button className="btn-submit" type="submit">
					<Link to="/register">
						<FormattedMessage id="buttonRegisterLinkLabel" />
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Login;
