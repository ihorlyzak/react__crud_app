import { useState } from "react";
import { useTasksList } from "hooks/useTasksList/useTasksList";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
	TextField,
} from "@mui/material";

export const TasksForm = () => {
	const [inputValue, setInputValue] = useState(""); // change input value
	const [tasksList, setTasksList] = useTasksList(); // add new task & save in local storage
	const [toggleSubmit, setToggleSubmit] = useState(true);
	const [isEditItem, setEditItem] = useState(null);
	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleOnClick = () => {
		if (inputValue && !toggleSubmit) {
			// edit task

			setTasksList(
				tasksList.map((element) => {
					if (element.id === isEditItem) {
						return { ...element, name: inputValue };
					}
					return element;
				}),
			);
			setToggleSubmit(true); //show add button
			setInputValue(""); //clear input
			setEditItem(null); // get back to adding
			return;
		}

		// add task
		const inputData = {
			id: new Date().getTime().toString(),
			name: inputValue,
		};
		setTasksList((currentArray) => [...currentArray, inputData]);

		setInputValue("");
	};

	// delete task
	const handleOnDelete = (id) => {
		const newTaskList = tasksList.filter((element) => id !== element.id);

		setTasksList(newTaskList);
	};

	// get edit element
	const handleOnEdit = (id) => {
		let newEdit = tasksList.find((element) => {
			return element.id === id;
		});

		setToggleSubmit(false);
		setInputValue(newEdit.name);
		setEditItem(id);
	};

	return (
		// input field & button
		<div>
			<Box
				component="form"
				sx={{
					margin: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div>
					<TextField
						sx={{ minWidth: "180px", margin: "0 15px 0 0" }}
						id="outlined-basic "
						label="Enter new task "
						variant="outlined"
						size="small"
						type="text"
						name="username"
						onChange={handleOnChange}
						value={inputValue}
					/>
					{toggleSubmit ? (
						<Button
							sx={{
								border: "1px solid #bce0fd",
								minWidth: "180px",
								margin: "3px 0",
							}}
							size="small"
							variant="text"
							color="success"
							onClick={handleOnClick}
						>
							Save task
						</Button>
					) : (
						<Button
							sx={{
								border: "1px solid #bce0fd",
								minWidth: "180px",
								margin: "3px 0",
							}}
							size="small"
							variant="text"
							color="secondary"
							onClick={handleOnClick}
						>
							Edit task
						</Button>
					)}
				</div>
			</Box>

			{/* Table */}
			<TableContainer component={Paper}>
				<Table size="small" aria-label="simple table">
					{tasksList.length ? (
						<TableHead>
							<TableRow>
								<TableCell>My tasks:</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
					) : (
						<TableHead>
							<TableRow>
								<TableCell>Task list is Empty</TableCell>
							</TableRow>
						</TableHead>
					)}

					<TableBody>
						{tasksList.map((element) => {
							return (
								<TableRow key={element.id}>
									<TableCell> {element.name} </TableCell>
									<TableCell align="right">
										<Button
											onClick={() =>
												handleOnEdit(element.id)
											}
										>
											Edit
										</Button>

										<Button
											color="error"
											onClick={() =>
												handleOnDelete(element.id)
											}
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
