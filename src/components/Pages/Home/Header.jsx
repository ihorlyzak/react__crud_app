import { Button, Box } from "@mui/material/";

export const Header = () => {
	const handleLogout = () => {
		localStorage.setItem("isLoggedIn", "false");		
		window.location.pathname = "/";
	};

	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="space-around"
			alignItems="center"
		>
			<h2>Simple to do app</h2>
			<Button
				size="large"
				variant="text"
				type="submit"
				color="error"
				onClick={handleLogout}
			>
				Sign out
			</Button>
		</Box>
	);
};
