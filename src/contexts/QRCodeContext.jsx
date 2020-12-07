import React, { useState, useEffect } from "react";
import QRCodeService from "services/QRCodeService"

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [language, setLanguage] = useState("fr");
	const [listeItems , setListeItems] = useState()

	const initialLoad = () => {
		
		
		/*QRCodeService
			.getAll()
			.then( response => {
				setListeItems(response)
			})
		*/
	}

	useEffect(initialLoad, [])

	const getAllQR = () => {
		return [
				{id:"06549e55-19fe-4e70-b669-fad6627zca92" , name:"sadra" , description:"je suis un qr code"}, 
				{id:"06549e55-19fe-4e70-b469-fad6627aca92" , name:"edri" , description:"j'aime les qr code"} , 
				{id:"06549e55-19ze-4e70-b689-fad6627aca92" , name:"sadra" , description:"j'adore les qr code"},
				{id:"06549e55-19fe-4e70-b669-fad6627aca92" , name:"sadra" , description:"je suis une banane"}, 
				{id:"06549e57-19fe-4e70-b469-fad6627aca92" , name:"edri" , description:"cherche mate sur rocket league"} , 
				{id:"06549e55-19fe-4e70-b689-fad6627aca92" , name:"sadra" , description:"ta mere"},
				{id:"06549d55-19fe-4e70-b669-fad6627aca92" , name:"sadra" , description:"cherche moi"}, 
				{id:"0654ze55-19fe-4e70-b469-fad6627aca92" , name:"edri" , description:"je suis un qr code"} , 
				{id:"065a9e55-19fe-4e70-b689-fad6627aza92" , name:"sadra" , description:"je suis un qr code"}
				]
	}

	const createQRcode = (id, name, desc) => {
		QRCodeService
			.create({id:id,name:name,description:desc})
			.then( response => {
				console.log("creation réussi");
				console.log(response)
			})
			.catch(reason => {
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