import React, { useState, useEffect } from "react";
import QRCodeService from "services/QRCodeService"

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [language, setLanguage] = useState("fr");
	const [listeItems , setListeItems] = useState([])

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
		return listeItems
	}

	const createQRcode = (id, name, desc) => {
		QRCodeService
			.create({qrCodeID:id,name:name,description:desc})
			.then( response => {
				console.log("creation réussi");
				console.log(response)
			})
			.catch(reason => {
				console.log("creation échoué")
				console.log(reason)
			})
	}

	const exposedValue = { language, setLanguage, getAllQR, createQRcode };
	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
export default Context;