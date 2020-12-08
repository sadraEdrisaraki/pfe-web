import React, { useState, useContext } from "react";
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
import Logout from "components/Logout/Logout"

const App = () => {
	const { language,role} = useContext(QRCodeContext);

	const isDoctor = () => {
		return role==="Doctor"
	}

	const isEstablishment = () => {
		return role==="Establishment"
	}

	const redirectIfRoleKnown = () => {
		if (isDoctor()) {
			<Redirect to="/doctor" />
		} else if (isEstablishment()) {
			<Redirect to="/establishment" />
		}
	}

	return (
		<IntlProvider locale="fr" messages={translations[language]}>
			<div className="app">
				<div className="lang-selector">
					<SelectLanguage />
					<Logout/>
				</div>
				<Router>
					{redirectIfRoleKnown()}
					<Switch>
						<Route path="/doctor">
						{isDoctor() ? <Doctor /> : <Redirect to="/" />}	
						</Route>
						<Route path="/establishment">
						{isEstablishment() ? <EstablishmentPage /> : <Redirect to="/" />}	
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
