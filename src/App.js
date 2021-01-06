import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css'

function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Navbar />
				<Content />
			</div>
		</>
	);
}

export default App;
