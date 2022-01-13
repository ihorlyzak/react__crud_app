export const ValidateForm = (values) => {
	const database = {
		username: "test",
		password: "iamJane",		
	};

	if (
		values.username === database.username &&
		values.password === database.password
	) {
		localStorage.setItem("isLoggedIn", "true");		
		window.location.pathname = "/home";
	}
};
