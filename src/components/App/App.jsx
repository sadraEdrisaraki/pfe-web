import React from "react";
import "./style.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "components/Register/Register";
import Login from "components/Login/Login";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
