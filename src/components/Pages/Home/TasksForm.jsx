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
    // change input value
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    // add new task & save in local storage
    const [tasksList, setTasksList] = useTasksList();

    const handleOnClick = () => {
        if (inputValue.length) {
            setTasksList((currentArray) => [...currentArray, inputValue]);            
        }
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
                </div>
            </Box>

            {/* Table */}
            <TableContainer component={Paper}>
                <Table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>My tasks:</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasksList.map((task) => (
                            <TableRow key={task}>
                                <TableCell> {task} </TableCell>
                                <TableCell align="right">
                                    <Button>Edit</Button>
                                    <Button color="error">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
