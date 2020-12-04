import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const Email = ({ newEmail, setNewEmail }) => {
	const handleEmailChange = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
	};

	return (
		<div>
			<FormattedMessage id="emailInputLabel"/>
			<input type="text" className="mail-input" value={newEmail} onChange={handleEmailChange} placeholder="adresse mail..."/>
		</div>
	);
};

export default Email;
