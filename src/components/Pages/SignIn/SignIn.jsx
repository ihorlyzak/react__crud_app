import { Container, Grid, Box, TextField, Button } from "@mui/material/";

import { useForm } from "hooks/useForm";
import { ErrorList } from "helpers/ErrorList";

export const SignIn = () => {
	const { handleFormChange, handleSubmit, loginValues, errorsList } =
		useForm(ErrorList);

	return (
		<Container maxWidth="false">
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				style={{
					minHeight: "100vh",
				}}
			>
				<Box
					sx={{
						width: "60vw",
						height: "70vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						bgcolor: "#cfe8fc",
						borderRadius: "15px",
						border: "1px solid #bce0fd",			
					}}
				>
					<h2>CRUD app sign in</h2>

					<p
						style={{
							border: "1px solid #fff",
							borderRadius: "15px",
							padding: "5px 50px",
							backgroundColor: "#fafafa",
						}}
					>
						Please sign in to view this page.
					</p>

					<Box
						component="form"
						sx={{
							margin: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div>
							<TextField
								sx={{ mb: "5px" }}
								id="outlined-basic "
								label="Login "
								variant="outlined"
								size="small"
								type="text"
								name="username"
								value={loginValues.username}
								onChange={handleFormChange}
							/>
						</div>
						{errorsList.username && <p style={{color: "red"}}>{errorsList.username}</p>}

						<div>
							<TextField
								sx={{ mb: "5px" }}
								id="outlined-basic"
								label="Password"
								variant="outlined"
								size="small"
								type="password"
								name="password"
								value={loginValues.password}
								onChange={handleFormChange}
							/>
						</div>
						{errorsList.password && <p style={{color: "red"}}>{errorsList.password}</p>}

						<Button
							sx={{ border: "1px solid #bce0fd" }}
							size="large"
							variant="text"
							type="submit"
							color="success"
							onClick={handleSubmit}
						>
							Sign in
						</Button>
					</Box>
				</Box>
			</Grid>
		</Container>
	);
};
