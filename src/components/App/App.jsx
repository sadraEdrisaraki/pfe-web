import React, { useContext } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./style.css";
import translations from "../../translations/translations.json";
import QRCodeContext from "contexts/QRCodeContext";
import RegisterContainer from "components/Register/RegisterContainer";
import LoginContainer from "components/Login/LoginContainer";
import EstablishmentPage from "components/Establishment/EstablishmentPage/EstablishmentPage";
import Navbar from "components/Navbar/Navbar";

const App = () => {
	const { language } = useContext(QRCodeContext);
	//TODO requête backend check valid token
	// redirection selon rôle
	const isValidToken = () => {
		return localStorage.getItem("token");
	}

	return (
		<IntlProvider locale="fr" messages={translations[language]}>
			<div className="app">
			<Router>
				<Switch>
					<Route path="/register">
						<RegisterContainer />
					</Route>
					<Route path="/establishment">
						<EstablishmentPage />
					</Route>
					<Route path="/">
						{ isValidToken() ? <Redirect to="/establishment"/> : <LoginContainer />}
					</Route>
				</Switch>
			</Router>
			</div>
			</IntlProvider>
	);
};

export default App;
