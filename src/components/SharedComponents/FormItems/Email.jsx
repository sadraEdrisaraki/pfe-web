import React, { useState } from "react";

const Email = ({ newEmail, setNewEmail }) => {
	const handleEmailChange = (event) => {
		event.preventDefault();
		setNewEmail(event.target.value);
	};

	return (
		<div>
			Email
			<input type="text" value={newEmail} onChange={handleEmailChange} />
		</div>
	);
};

export default Email;
