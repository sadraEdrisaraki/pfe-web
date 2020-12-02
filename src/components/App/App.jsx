import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RegisterContainer from "components/Register/RegisterContainer";
import LoginContainer from "components/Login/LoginContainer";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/register">
						<RegisterContainer />
					</Route>
					<Route path="/">
					<LoginContainer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
