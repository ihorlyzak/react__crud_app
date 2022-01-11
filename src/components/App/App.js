import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button } from 'components/Button/Button';

function App() {

	return (
		<BrowserRouter>

			<Routes>
				<Route exact path="/home" element={<Button />} />
			</Routes>

		</BrowserRouter>
	);
}

export default App;
