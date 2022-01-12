import { Button, Box } from "@mui/material/";

export const Header = () => {
	const handleLogout = () => {
		localStorage.clear();
		window.location.pathname = "/";
	};

	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="space-around"
			alignItems="center"
		>
			<h2>Your simple to do</h2>
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