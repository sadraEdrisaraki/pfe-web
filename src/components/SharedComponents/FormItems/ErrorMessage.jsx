import React, { useState } from "react";

const ErrorMessage = ({ errorMessage }) => {
	return <div className="invalid-feedback">{errorMessage}</div>;
};

export default ErrorMessage;
