import React from "react";
import { FormattedMessage } from "react-intl";

const Email = ({ newEmail, setNewEmail }) => {
	const handleEmailChange = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
	};

	return (
		<div>
			<label>
				<FormattedMessage id="emailInputLabel" />
				<input
					type="text"
					className="mail-input"
					value={newEmail}
					onChange={handleEmailChange}
				/>
			</label>
		</div>
	);
};

export default Email;
