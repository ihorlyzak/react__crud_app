import { ValidateForm } from "components/ValidateForm";
import { useState } from "react";

export const useForm = (ErrorList) => {
	const [loginValues, setLoginValues] = useState({
		username: "",
		password: "",
	});

	const [errorsList, setErrorsList] = useState({});

	const handleFormChange = (e) => {
		setLoginValues((inputValues) => {
			return {
				...inputValues,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrorsList(ErrorList(loginValues));
		ValidateForm(loginValues);
	};

	return { handleFormChange, handleSubmit, loginValues, errorsList };
};
