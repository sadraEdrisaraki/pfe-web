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
	newPassword,
	setNewPassword,
	passwordConfirmed,
	setPasswordConfirmed,
	errorMessage,
}) => {
	return (
		<div className="register-page">
			<div className="register-container">
				<h1><FormattedMessage id="registerFormTitleLabel"/></h1>
				<ErrorMessage errorMessage={errorMessage} />
				<form onSubmit={handleAddParticipant}>
					<Email newEmail={newEmail} setNewEmail={setNewEmail} />
					<Password
						inputLabel={<FormattedMessage id="passwordInputLabel"/>}
						newPassword={newPassword}
						setNewPassword={setNewPassword}
					/>
					<Password
						inputLabel={<FormattedMessage id="passwordToConfirmInputLabel"/>}
						newPassword={passwordConfirmed}
						setNewPassword={setPasswordConfirmed}
					/>
					<button className="btn-register" type="submit">
					<FormattedMessage id="buttonSubmitRegisterFormLabel"/>
					</button>
					<h4>Êtes-vous</h4>
					<div>
						<input
							type="radio"
							value="Doctor"
							checked={newRole === "Doctor"}
							onChange={handleRoleChange}
							name="role"
						/>
						{<FormattedMessage id="doctorRadioButtonLabel"/>}
						<input
							type="radio"
							value="Establishment"
							checked={newRole === "Establishment"}
							onChange={handleRoleChange}
							name="role"
						/>
						{<FormattedMessage id="establishmentRadioButtonLabel"/>}
					</div>
				</form>
				<br />
				<button type="submit">
					<Link to="/"><FormattedMessage id="buttonLoginLinkLabel"/></Link>
				</button>
			</div>
		</div>
	);
};

export default Register;
