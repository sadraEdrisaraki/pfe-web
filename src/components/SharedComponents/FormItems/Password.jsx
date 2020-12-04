import React, { useState } from "react";

const Password = ({ newPassword, setNewPassword }) => {
	const handlePasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	return (
		<div>
			Mot de passe
			<input type="text" value={newPassword} onChange={handlePasswordChange} />
		</div>
	);
};

export default Password;
