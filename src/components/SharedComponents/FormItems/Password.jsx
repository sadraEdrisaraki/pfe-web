import React, { useState } from "react";

const Password = ({ newPassword, setNewPassword }) => {
	const handlePasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	return (
		<div>
			Password
			<input type="text" value={newPassword} onChange={handlePasswordChange} />
		</div>
	);
};

export default Password;
