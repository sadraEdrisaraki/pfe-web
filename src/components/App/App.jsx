import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.css";

import RegisterContainer from "components/Register/RegisterContainer";
import LoginContainer from "components/Login/LoginContainer";
import EstablishmentPage from "components/Establishment/EstablishmentPage/EstablishmentPage"
import Test from "components/Test/Test";
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
						<LoginContainer />
					</Route>
				</Switch>
			</Router>
			
		</div>
const App = () => {
	return (
		<div>
			<Test></Test>
		</div>
	);
};

export default App;
