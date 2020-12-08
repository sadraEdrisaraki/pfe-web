import React, { useContext } from "react";

import QRCodeContext from "contexts/QRCodeContext";

const SelectLanguage = () => {
	const { language, setLanguage } = useContext(QRCodeContext);

	const handleLanguageChange = (event) => {
		event.preventDefault();
		setLanguage(event.target.value);
	};

	return (
		<select value={language} onChange={handleLanguageChange}>
			<option value="fr">Français</option>
			<option value="en">English</option>
			<option value="nl">Nederlands</option>
		</select>
	);
};

export default SelectLanguage;
