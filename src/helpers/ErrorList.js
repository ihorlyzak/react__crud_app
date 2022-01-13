export const ErrorList = (values) => {
	let errorsList = {};

	if (!values.username.trim()) {
		errorsList.username = "Login field is empty. Please enter your login";
	}

	if (!values.password) {
		errorsList.password =
			"Password field is empty. Please enter your password";
	}

	return errorsList;
};
