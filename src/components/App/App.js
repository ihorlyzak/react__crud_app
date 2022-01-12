import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Home } from 'components/Pages/Home';
import { SignIn } from 'components/Pages/SignIn';
import { Account } from 'components/Pages/Account';
import ProtectedRoutes from 'components/ProtectedRoutes/ProtectedRoutes';

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
					<li>
						<Link to="/account">Account</Link>
					</li>
				</ul>
			</div>

			<Routes>
				<Route exact path="/" element={<SignIn />} />

				<Route element={<ProtectedRoutes />}>
					<Route exact path="/account" element={<Account />} />
					<Route exact path="/home" element={<Home />} />
				</Route>
			</Routes>

		</BrowserRouter>
	);
}

export default App;
