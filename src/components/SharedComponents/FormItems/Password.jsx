import React from "react";
import { FormattedMessage } from "react-intl";

const Password = ({ inputLabel, newPassword, setNewPassword }) => {
	const handlePasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	return (
		<div>
			<label>
				{inputLabel}
				<input
					type="text"
					className="passwd-input"
					value={newPassword}
					onChange={handlePasswordChange}
				/>
			</label>
		</div>
	);
};

export default Password;
