import React, { useState, useEffect } from "react";

import QRCodeService from "services/QRCodeService";
import participantService from "services/ParticipantService.js";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [language, setLanguage] = useState("fr");
	const [loggedIn, setLoggedIn] = useState(false);
	const [role, setRole] = useState("");
	const [listeItems, setListeItems] = useState([]);

	const getRole = () => {
		participantService
			.getRoleByToken()
			.then((response) => setRole(response.role))
			.catch((error) => setRole(""));
	};
	
	useEffect(getRole,[loggedIn])

	const initialLoad = () => {
		
		QRCodeService
			.getAll()
			.then( response => {
				setListeItems(response)
				console.log(listeItems[0])
		})

	}

	useEffect(initialLoad, [])

	const getAllQR = () => {
		return listeItems;
	};

	const createQRcode = (id, name, desc) => {
		QRCodeService.create({ qrCodeID: id, name: name, description: desc })
			.then((response) => {
				console.log("creation réussi");
				console.log(response)
				initialLoad()
			})
			.catch(reason => {
				console.log("creation échoué")
				console.log(reason)
			})
			.catch((reason) => {
				console.log("creation échoué");
				console.log(reason);
			});
	};

	const exposedValue = { language, setLanguage,setLoggedIn,role,getAllQR, createQRcode };
	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
export default Context;
