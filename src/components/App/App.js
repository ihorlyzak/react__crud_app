import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "components/ProtectedRoutes/ProtectedRoutes";

import { Home } from "components/Pages/Home/Home";
import { SignIn } from "components/Pages/SignIn";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<SignIn />} />

				<Route element={<ProtectedRoutes />}>
					<Route exact path="/home" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
