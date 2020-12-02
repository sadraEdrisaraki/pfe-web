import React from "react";
import { ProviderWrapper as QRCodeProvider } from "../../contexts/QRCodeContext";
import App from "./App";

const AppContainer = () => {
<<<<<<< HEAD
	console.log(process.env.REACT_APP_API_ENDPOINT)
	
=======
	//console.log(process.env.REACT_APP_API_ENDPOINT)
>>>>>>> 0037aad638122cf16f88f8a8db41c90caa2c9c5d
	return (
		<QRCodeProvider>
			<App />
		</QRCodeProvider>
	);
};

export default AppContainer;