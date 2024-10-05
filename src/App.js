import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import Mypage from './pages/user/Mypage';
import PurchaseList from './pages/user/PurchaseList.jsx';

import Comment from './pages/community/Comment';


// css
import './css/reset.css';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/user/joinform' element={<JoinForm />} />
					<Route path='/user/loginform' element={<LoginForm />} />
					<Route path='/user/mypage' element={<Mypage />} />
					<Route path='/user/purchaselist' element={<PurchaseList />} />

					<Route path='/community/comment' element={<Comment />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;