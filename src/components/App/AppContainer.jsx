import React from "react";
import { ProviderWrapper as QRCodeProvider } from "../../contexts/QRCodeContext";
import App from "./App";

const AppContainer = () => {
	console.log(process.env.REACT_APP_API_ENDPOINT)
	
	return (
		<QRCodeProvider>
			<App />
		</QRCodeProvider>
	);
};

export default AppContainer;