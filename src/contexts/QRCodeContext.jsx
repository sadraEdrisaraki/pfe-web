import React from "react";

import participantService from "services/ParticipantService.js";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	
	const addParticipant = (role, email, password) => {
		//TO DO traitement différent selon rôle?
		//TO DO Bcrypt
		const payload = {
			email: email,
			password: password,
		};
		participantService
			.register(payload)
			.then((response) => console.log(response));
		// TO DO gestion erreurs -> handler middleware?
	};

	const login = (email, password) => {
		//TO DO Bcrypt
		const payload = {
			email: email,
			password: password,
		};
		participantService.login(payload).then((response) => console.log(response));
		// TO DO gestion erreurs -> handler middleware?
	};

	const exposedValue = { addParticipant, login };
	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
export default Context;
