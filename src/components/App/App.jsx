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

const App = () => {
	const { language } = useContext(QRCodeContext);

	return (
		<IntlProvider locale="fr" messages={translations[language]}>
			<div className="app">
				<Router>
					<Switch>
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
