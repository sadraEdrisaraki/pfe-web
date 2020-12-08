import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

import QRCodeContext from "contexts/QRCodeContext";

const SelectLanguage = () => {
	const { language, setLanguage } = useContext(QRCodeContext);

	const handleLanguageChange = (event) => {
		event.preventDefault();
		setLanguage(event.target.value);
	};

	/*
<option value="fr"><FormattedMessage id="languageOptionFrenchLabel" />
			</option>
			<option value="en">
				<FormattedMessage id="languageOptionEnglishLabel" />
			</option>
			<option value="nl">
				<FormattedMessage id="languageOptionDutchLabel" />
			</option>
	*/
	return (
		<select value={language} onChange={handleLanguageChange}>
			<option value="fr">Français
			</option>
			<option value="en">
				Anglais
			</option>
			<option value="nl">
				Néerlandais
			</option>
		</select>
	);
};

export default SelectLanguage;
