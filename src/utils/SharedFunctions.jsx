import { FormattedMessage } from "react-intl";

const isFormInputInvalid = (error) => {
	return error.response.status === 400;
};

const isWrongEmailOrPassword = (error) => {
	return error.response.data.errors === undefined;
};

const isEmailInputValid = (error) => {
	return error.response.data.errors.Login === undefined;
};

const isPasswordInputValid = (error) => {
	return error.response.data.errors.Password === undefined;
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

const setInvalidInputsFlag = (
	setIsEmailInputInvalid,
	setIsPasswordInputInvalid,
	setIsPasswordConfirmedInputInvalid
) => {
	if (setIsEmailInputInvalid !== undefined) setIsEmailInputInvalid(true);
	if (setIsPasswordInputInvalid !== undefined) setIsPasswordInputInvalid(true);
	if (setIsPasswordConfirmedInputInvalid !== undefined)
		setIsPasswordConfirmedInputInvalid(true);
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
			setInvalidInputsFlag(setIsEmailInputInvalid, setIsPasswordInputInvalid);
			setErrorMessage(
				<FormattedMessage id="emailOrPasswordInvalidErrorMessage" />
			);
		} else if (!isEmailInputValid(error)) {
			setInvalidInputsFlag(setIsEmailInputInvalid);
			setErrorMessage(<FormattedMessage id="emailInvalidErrorMessage" />);
		} else if (!isPasswordInputValid(error)) {
			setInvalidInputsFlag(setIsPasswordInputInvalid);
			setErrorMessage(<FormattedMessage id="passwordInvalidErrorMessage" />);
		} else if (!isPasswordToConfirmValid(error)) {
			setInvalidInputsFlag(
				setIsPasswordConfirmedInputInvalid
			);
			setErrorMessage(
				<FormattedMessage id="passwordToConfirmInvalidErrorMessage" />
			);
		}
	} else if (isEmailAlreadyUsed(error)) {
		setInvalidInputsFlag(setIsEmailInputInvalid, setIsPasswordInputInvalid);
		setErrorMessage(
			<FormattedMessage id="emailOrPasswordInvalidErrorMessage" />
		);
	} else if (isFormInputWrong(error)) {
		setInvalidInputsFlag(setIsPasswordInputInvalid,setIsPasswordConfirmedInputInvalid)
		setErrorMessage(
			<FormattedMessage id="passwordAndPasswordToConfirmNoMatchErrorMessage" />
		);
	}
};

export { handleErrorResponse };
