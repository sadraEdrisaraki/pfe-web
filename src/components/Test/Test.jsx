import React from "react";

import participantService from "services/QRCodeService";

const Test = () => {
	participantService
		.getAll()
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log("fail",error);
		});

	return <div></div>;
};

export default Test;
