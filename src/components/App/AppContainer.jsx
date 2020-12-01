import React from "react";
import * as config from "./../../config/appsettings.json"

import App from "./App";
console.log(config.test)

const AppContainer = () => {
	return <App />;
};

export default AppContainer;
