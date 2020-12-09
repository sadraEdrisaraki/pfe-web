import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

import QRCodeContext from "contexts/QRCodeContext";

const SelectLanguage = () => {
	const { language, setLanguage } = useContext(QRCodeContext);

	const handleLanguageChange = (event) => {
		event.preventDefault();
		setLanguage(event.target.value);
	};

	return (
		<select
			value={language}
			onChange={handleLanguageChange}
			aria-describedby="helpText"
		>
			<span id="helpText" className="hidden">
				<FormattedMessage id="selectLanguageLabel" />
			</span>
			<option value="fr">Français</option>
			<option value="en">English</option>
			<option value="nl">Nederlands</option>
		</select>
	);
};

export default SelectLanguage;
