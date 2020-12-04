import React, { useState } from "react";

const Email = ({ newEmail, setNewEmail }) => {
	const handleEmailChange = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
	};

	return (
		<div>
			Email
			<input type="text" className="mail-input" value={newEmail} onChange={handleEmailChange} placeholder="adresse mail..."/>
		</div>
	);
};

export default Email;
