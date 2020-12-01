import React from "react";

import { ProviderWrapper as QRCodeProvider } from "../../contexts/QRCodeContext";

import App from "./App";

const AppContainer = () => {
	return (
		<QRCodeProvider>
			<App />;
		</QRCodeProvider>
	);
};

export default AppContainer;
