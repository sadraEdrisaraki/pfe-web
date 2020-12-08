import React from "react";

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
				Entre 5 et 20 caractères
				</span>
			</label>
		</div>
	);
};

export default Password;
