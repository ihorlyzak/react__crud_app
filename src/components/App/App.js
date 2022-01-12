import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "components/Pages/Home/Home";
import ProtectedRoutes from "components/ProtectedRoutes/ProtectedRoutes";
import { SignIn } from "components/Pages/SignIn";

function App() {
	return (
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="/">SignIn</Link>
					</li>
					<li>
						<Link to="/home">Home</Link>
					</li>
				</ul>
			</div>

			<Routes>
				<Route exact path="/" element={<SignIn />} />

				<Route element={<ProtectedRoutes />}>
					<Route exact path="/home" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
