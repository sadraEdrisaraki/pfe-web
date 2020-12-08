import React, { useState,useContext } from "react";
import { IntlProvider } from "react-intl";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import "./style.css";
import translations from "../../translations/translations.json";
import QRCodeContext from "contexts/QRCodeContext";
import RegisterContainer from "components/Register/RegisterContainer";
import LoginContainer from "components/Login/LoginContainer";
import EstablishmentPage from "components/Establishment/EstablishmentPage/EstablishmentPage";
import SelectLanguage from "components/SharedComponents/SelectLanguage";
import Doctor from "components/Doctor/Doctor";
import participantService from "services/ParticipantService.js";

const App = () => {
	const { language } = useContext(QRCodeContext);
	

	return (
		<IntlProvider locale="fr" messages={translations[language]}>
			<div className="app">
				<SelectLanguage />
				<Router>
					<Switch>
						<Route path="/doctor">
							<Doctor />
						</Route>
						<Route path="/establishment">
							<EstablishmentPage />
						</Route>
						<Route path="/register">
						
								<RegisterContainer />
							
						</Route>
						<Route path="/">
							
								<LoginContainer />
						
						</Route>
					</Switch>
				</Router>
			</div>
		</IntlProvider>
	);
};

export default App;
