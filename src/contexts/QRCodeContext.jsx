import React, { useState, useEffect } from "react";

import QRCodeService from "services/QRCodeService";
import participantService from "services/ParticipantService.js";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [language, setLanguage] = useState("fr");
	const [role, setRole] = useState("");
	const [listeItems, setListeItems] = useState([]);

	const getRole = () => {
		participantService
			.getRoleByToken()
			.then((response) => setRole(response.role))
			.catch((error) => console.log(error));
	};
	/*
	const initialLoad = () => {
		
		QRCodeService
			.getAll()
			.then( response => {
				setListeItems(response)
				console.log(listeItems[0])
		})

	}

	useEffect(initialLoad, [])
*/
	const getAllQR = () => {
		return listeItems;
	};

	const createQRcode = (id, name, desc) => {
		QRCodeService.create({ qrCodeID: id, name: name, description: desc })
			.then((response) => {
				console.log("creation réussi");
				console.log(response);
			})
			.catch((reason) => {
				console.log("creation échoué");
				console.log(reason);
			});
	};

	const exposedValue = { language, setLanguage,role,getRole, getAllQR, createQRcode };
	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
export default Context;
