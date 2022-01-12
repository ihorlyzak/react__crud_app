import { Container, Box, TextField, Button, Grid } from "@mui/material/";

export const SignIn = () => {
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
								id="outlined-basic "
								label="Login "
								variant="outlined"
								size="small"
								type="text"
								name="username"
								sx={{ mb: "5px" }}
							/>
						</div>

						<div>
							<TextField
								id="outlined-basic"
								label="Password"
								variant="outlined"
								size="small"
								type="password"
								name="username"
								sx={{ mb: "5px" }}
							/>
						</div>
						<Button
							size="large"
							variant="text"
							type="submit"
							color="success"
							sx={{ border: "1px solid #bce0fd" }}
						>
							Sign in
						</Button>
					</Box>
				</Box>
			</Grid>
		</Container>
	);
};
