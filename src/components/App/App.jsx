import React, { useContext } from "react";
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
import SelectLanguage from "components/SharedComponents/SelectLanguage"

const App = () => {
	const { language } = useContext(QRCodeContext);

	const isValidToken = () => {
		return localStorage.getItem("token") !== null;
	};

	return (
		<IntlProvider locale="fr" messages={translations[language]}>
			<div className="app">
				<div className="lang-selector">
					<SelectLanguage />
				</div>
				<Router>
					<Switch>
						<Route path="/establishment">
							<EstablishmentPage />
						</Route>
						<Route path="/register">
						{isValidToken() ? (
								<Redirect to="/establishment" />
							) : (
								<RegisterContainer />
							)}
						</Route>
						<Route path="/">
							{isValidToken() ? (
								<Redirect to="/establishment" />
							) : (
								<LoginContainer />
							)}
						</Route>
					</Switch>
				</Router>
			</div>
		</IntlProvider>
	);
};

export default App;
