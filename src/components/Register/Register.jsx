import React from "react";
import { FormattedMessage } from "react-intl";
import "./style.css";

import { Link } from "react-router-dom";

import Email from "components/SharedComponents/FormItems/Email";
import Password from "components/SharedComponents/FormItems/Password";
import ErrorMessage from "components/SharedComponents/FormItems/ErrorMessage";

const Register = ({
	handleAddParticipant,
	handleRoleChange,
	newRole,
	newEmail,
	setNewEmail,
	isEmailInputInvalid,
	newPassword,
	setNewPassword,
	isPasswordInputInvalid,
	passwordConfirmed,
	setPasswordConfirmed,
	isPasswordConfirmedInputInvalid,
	errorMessage,
}) => {
	return (
		<div className="register-page">
			<div className="register-container">
				<h1>
					<FormattedMessage id="registerFormTitleLabel" />
				</h1>
				<ErrorMessage errorMessage={errorMessage} />
				<form onSubmit={handleAddParticipant}>
					<Email newEmail={newEmail} setNewEmail={setNewEmail} isEmailInputInvalid={isEmailInputInvalid} />
					<Password
						inputLabel={<FormattedMessage id="passwordInputLabel" />}
						newPassword={newPassword}
						setNewPassword={setNewPassword}
						isPasswordInputInvalid={isPasswordInputInvalid}
					/>
					<Password
						inputLabel={<FormattedMessage id="passwordToConfirmInputLabel" />}
						newPassword={passwordConfirmed}
						setNewPassword={setPasswordConfirmed}
						isPasswordInputInvalid={isPasswordConfirmedInputInvalid}
					/>
					<button className="btn-register" type="submit">
						<FormattedMessage id="buttonSubmitRegisterFormLabel" />
					</button>
					<fieldset>
						<legend>
							<h4>Êtes-vous</h4>
						</legend>
						<input
							type="radio"
							value="Doctor"
							checked={newRole === "Doctor"}
							onChange={handleRoleChange}
							name="role"
						/>
						<label>{<FormattedMessage id="doctorRadioButtonLabel" />}</label>
						<input
							type="radio"
							value="Establishment"
							checked={newRole === "Establishment"}
							onChange={handleRoleChange}
							name="role"
						/>
						<label>
							{<FormattedMessage id="establishmentRadioButtonLabel" />}
						</label>
					</fieldset>
				</form>
				<br />
				<button type="submit">
					<Link to="/">
						<FormattedMessage id="buttonLoginLinkLabel" />
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Register;
