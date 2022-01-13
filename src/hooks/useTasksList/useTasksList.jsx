import { useState, useEffect } from "react";

export const useTasksList = () => {
	const [tasksList, setTasksList] = useState(
		JSON.parse(localStorage.getItem("tasksList")) || [],
	);

	useEffect(() => {
		localStorage.setItem("tasksList", JSON.stringify(tasksList));
	}, [tasksList]);

	return [tasksList, setTasksList];
};

