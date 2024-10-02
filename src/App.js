import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinForm from './pages/user/JoinForm';

import JoinForm from './pages/user/JoinForm';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
          <Route path='/user/joinform' element={<JoinForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;