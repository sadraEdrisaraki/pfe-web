import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "components/Register/Register";
import Login from "components/Login/Login";

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Register />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
