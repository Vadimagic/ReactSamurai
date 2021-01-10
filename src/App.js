import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css'

function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Navbar />
				<div className="wrapper__content">
					<Profile />
				</div>
			</div>
		</>
	);
}

export default App;
