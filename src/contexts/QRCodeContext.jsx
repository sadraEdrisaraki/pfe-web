import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [language, setLanguage] = useState("fr");

	const exposedValue = { language, setLanguage };
	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
export default Context;
