import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

import QRCodeContext from "contexts/QRCodeContext";

const Logout = () => {
	const { setLoggedIn } = useContext(QRCodeContext);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setLoggedIn(false);
	};

	return (
		<div>
			<button className="btn-warning" type="button" onClick={handleLogout}>
            <FormattedMessage id="buttonLogoutLabel" />
			</button>
		</div>
	);
};

export default Logout;
