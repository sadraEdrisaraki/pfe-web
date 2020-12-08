import { FormattedMessage } from "react-intl";

const isFormInputInvalid = (error) => {
	return error.response.status === 400;
};

const isWrongEmailOrPassword = (error) => {
	return (
		error.response.status === 400 && error.response.data.errors === undefined
	);
};

const isFormFilled = (error) => {
	return (
		error.response.data.errors.Login === undefined &&
		error.response.data.errors.Password === undefined &&
		error.response.data.errors.ConfirmPassword === undefined
	);
};

const isPasswordToConfirmValid = (error) => {
	return error.response.data.errors.ConfirmPassword === undefined;
};

const isEmailAlreadyUsed = (error) => {
	return error.response.status === 409;
};

const isFormInputWrong = (error) => {
	return error.response.status === 412;
};

const handleErrorResponse = (
	error,
	setErrorMessage,
	setIsEmailInputInvalid,
	setIsPasswordInputInvalid,
	setIsPasswordConfirmedInputInvalid
) => {
	if (isFormInputInvalid(error)) {
		if (isWrongEmailOrPassword(error)) {
			console.log("Login or mdp error 2");
			setIsEmailInputInvalid(true);
			setIsPasswordInputInvalid(true);
			setErrorMessage(
				<FormattedMessage id="emailOrPasswordInvalidErrorMessage" />
			);
		} else if (!isFormFilled(error)) {
			console.log("empty");
			setIsEmailInputInvalid(true);
			setIsPasswordInputInvalid(true);
			setErrorMessage(<FormattedMessage id="formEmptyErrorMessage" />);
		} else if (!isPasswordToConfirmValid(error)) {
			console.log("Mdp to confirm error");
			setIsPasswordConfirmedInputInvalid(true);
			setErrorMessage(
				<FormattedMessage id="passwordToConfirmInvalidErrorMessage" />
			);
		}
	} else if (isEmailAlreadyUsed(error)) {
		setIsEmailInputInvalid(true);
		setIsPasswordInputInvalid(true);
		setErrorMessage(
			<FormattedMessage id="emailOrPasswordInvalidErrorMessage" />
		);
	} else if (isFormInputWrong(error)) {
		setIsPasswordConfirmedInputInvalid(true);
		setIsPasswordInputInvalid(true);
		setErrorMessage(
			<FormattedMessage id="passwordAndPasswordToConfirmNoMatchErrorMessage" />
		);
	}
};

export { handleErrorResponse };
