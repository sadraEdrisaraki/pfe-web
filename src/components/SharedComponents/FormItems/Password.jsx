import React, { useState } from "react";

const Password = ({ inputLabel,newPassword, setNewPassword }) => {
	const handlePasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	return (
		<div>
			{inputLabel}
			<input type="text" className="passwd-input" value={newPassword} onChange={handlePasswordChange} placeholder="mot-de-passe..."/>
		</div>
	);
};

export default Password;
