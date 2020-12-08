import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid"
import QRCodeService from "services/QRCodeService";
import participantService from "services/ParticipantService.js";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [language, setLanguage] = useState("fr");
	const [role, setRole] = useState("");
	const [listeItems, setListeItems] = useState([]);
	const [codeIdMed , setcodeIdMed] = useState("")
	const [codeIdEst , setcodeIdEst] = useState("")

	const getRole = () => {
		participantService
			.getRoleByToken()
			.then((response) => setRole(response.role))
			.catch((error) => console.log(error));
	};
	
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

	const createQRcodeMed = () => {
		console.log("création du qr code avec l'id " + codeIdMed)
		QRCodeService.create({ qrCodeID: codeIdMed})
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

	const createQRcodeEst = (name, desc) => {
		console.log("création du qr code avec l'id " + codeIdEst)

		QRCodeService.create({ qrCodeID: codeIdEst, name: name, description: desc })
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

	const generateQRcodeIdMed = () => {
		let tempId = uuidv4()
		setcodeIdMed(tempId)
		localStorage.setItem("qr_id_med" , tempId)
		console.log("localstorage = " + localStorage.getItem("qr_id_med"))
	}

	const generateQRcodeIdEst = () => {
		let tempId = uuidv4()
		setcodeIdEst(tempId)
		localStorage.setItem("qr_id_est" , tempId)
		console.log("localstorage = " + localStorage.getItem("qr_id_est"))
	}

	const exposedValue = { 
		language, 
		setLanguage, 
		role, 
		getRole, 
		getAllQR, 
		createQRcodeMed,
		createQRcodeEst, 
		generateQRcodeIdMed, 
		generateQRcodeIdEst, 
		codeIdMed
	};
	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
export default Context;
