import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css'

function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Navbar />
				<Profile />
			</div>
		</>
	);
}

export default App;
