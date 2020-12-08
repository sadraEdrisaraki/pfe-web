import React from "react";
import { FormattedMessage } from "react-intl";

const Password = ({
	inputLabel,
	newPassword,
	setNewPassword,
	isPasswordInputInvalid,
}) => {
	const handlePasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	return (
		<div>
			<label>
				{inputLabel}
				<br />
				<input
					type="text"
					className="passwd-input"
					value={newPassword}
					onChange={handlePasswordChange}
					aria-required="true"
					aria-invalid={isPasswordInputInvalid}
				/><br/>
				<span className="help">
				<FormattedMessage id="passwordInputHelpLabel" />
				</span>
			</label>
		</div>
	);
};

export default Password;
