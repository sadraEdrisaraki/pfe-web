import { FormattedMessage } from "react-intl";

const isEmailOrPasswordInvalid = (error) => {
	return (
		error.response.data.errors.Login[0] ||
		error.response.data.errors.Password[0]
	);
};

const isFormInputInvalid = (error) => {
	return error.response.data.status === 400;
};

const isFormInputWrong = (error) => {
	return error.response.data.status === 412;
};

const handleErrorResponse = (
	error,
	setErrorMessage,
	setIsEmailInputInvalid,
	setIsPasswordInputInvalid
) => {
	console.log("Error: ",error)
	if (isFormInputInvalid(error)) {
		if (isEmailOrPasswordInvalid(error)) {
			setErrorMessage(< FormattedMessage id = "EmailOrPasswordInvalidErrorMessage" />);
			setIsEmailInputInvalid(true);
			setIsPasswordInputInvalid(true);
		}
	} else if (isFormInputWrong(error)) {
		setErrorMessage("Le mpd et mdp confirmé ne correspondent pas");
	}
};

export { handleErrorResponse };
