import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./style.css";

import RegisterContainer from "components/Register/RegisterContainer";
import LoginContainer from "components/Login/LoginContainer";
import EstablishmentPage from "components/Establishment/EstablishmentPage/EstablishmentPage";

const App = () => {
	//TODO requête backend check valid token
	// redirection selon rôle
	const isValidToken = () => {
		return localStorage.getItem("token");
	}

	return (
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
	);
};

export default App;
