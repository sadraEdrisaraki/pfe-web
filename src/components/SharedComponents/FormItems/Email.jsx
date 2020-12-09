import React from "react";
import { FormattedMessage } from "react-intl";
import "./assets/style.css"

const Email = ({ newEmail, setNewEmail, isEmailInputInvalid }) => {
	const handleEmailChange = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
	};

	return (
		<div>
			<label>
				<FormattedMessage id="emailInputLabel" />
				<br />
				<input
					type="text"
					className="mail-input"
					value={newEmail}
					onChange={handleEmailChange}
					aria-required="true"
					aria-invalid={isEmailInputInvalid}
				/>
			</label>
		</div>
	);
};

export default Email;
