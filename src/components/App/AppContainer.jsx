import React from "react";
import * as config from "./../../config/appsettings.json"

import { ProviderWrapper as QRCodeProvider } from "../../contexts/QRCodeContext";

import App from "./App";
console.log(config.test)

const AppContainer = () => {
	return (
		<QRCodeProvider>
			<App />
		</QRCodeProvider>
	);
};

export default AppContainer;
