const isEmailInputValid = (error) => {
	return !error.response.data.errors.Login[0];
};

const isPasswordInputValid = (error) => {
	return !error.response.data.errors.Password[0];
};

//TODO rajouter != codes et msg appropriés
const handleErrorResponse = (error,setErrorMessage) => {
    if (error.response.data.status === 400)
        if (!isEmailInputValid(error) || !isPasswordInputValid(error))
            setErrorMessage("Email ou mot de passe invalide(s)");
};

export { handleErrorResponse };
