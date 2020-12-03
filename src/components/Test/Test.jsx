import React from "react";
import qrCodeService from "../../services/QRCodeService";

const Test = () => {
	qrCodeService
		.getAll()
		.then((response) => console.log(response))
		.catch((error) => {
			console.log("fail", error);
		});
	return <div></div>;
};

export default Test;
