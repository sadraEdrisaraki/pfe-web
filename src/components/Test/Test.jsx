import React from "react";

import participantService from "services/ParticipantService.js";

const Test = () => {
	const test = participantService.getAll();

	return <div>{test}</div>;
};

export default Test;
