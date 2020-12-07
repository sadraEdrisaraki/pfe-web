import { FormattedMessage } from "react-intl";

const isFormInputInvalid = (error) => {
	return error.response.data.status === 400;
};

const isFormEmpty = (error) => {
	return !(
		error.response.data.errors.Login === undefined &&
		error.response.data.errors.Password === undefined &&
		error.response.data.errors.ConfirmPassword === undefined
	);
};

const isEmailValid = (error) => {
	return error.response.data.errors.Login === undefined;
};

const isPasswordValid = (error) => {
	return error.response.data.errors.Password === undefined;
};

const isPasswordToConfirmValid = (error) => {
	return error.response.data.errors.ConfirmPassword === undefined;
};

const isEmailAlreadyUsed = (error) => {
	return error.response.status === 409;
};

const isFormInputWrong = (error) => {
	return error.response.data.status === 412;
};

const isPasswordWrong = (error) => {
	return error.response.status === 400;
};

const handleErrorResponse = (
	error,
	setErrorMessage,
	setIsEmailInputInvalid,
	setIsPasswordInputInvalid,
	setIsPasswordConfirmedInputInvalid
) => {
	if (isPasswordWrong(error)) {
		console.log("Login or mdp error");
		setIsEmailInputInvalid(true);
		setIsPasswordInputInvalid(true);
		setErrorMessage(
			<FormattedMessage id="emailOrPasswordInvalidErrorMessage" />
		);
	} else if (isFormInputInvalid(error)) {
		if (isFormEmpty(error)) {
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
		} else {
			console.log("Login or mdp error");
			setIsEmailInputInvalid(true);
			setIsPasswordInputInvalid(true);
			setErrorMessage(
				<FormattedMessage id="emailOrPasswordInvalidErrorMessage" />
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
