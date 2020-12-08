import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import "./assets/style.css"

import QRCodeContext from "contexts/QRCodeContext";

const Logout = () => {
	const { setLoggedIn } = useContext(QRCodeContext);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setLoggedIn(false);
	};

	return (
		<div className="logout-btn">
			<button onClick={handleLogout}>
            	<FormattedMessage id="buttonLogoutLabel" />
			</button>
		</div>
	);
};

export default Logout;
