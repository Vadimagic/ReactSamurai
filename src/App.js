import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css'

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Navbar />
			<Content />
		</div>
	);
}

export default App;
