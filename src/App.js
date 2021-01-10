import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="wrapper">
				<Navbar />
				<div className="wrapper__content">
					<Switch>
						<Route path="/profile" component={Profile}/>
						<Route path="/messenger" component={Messenger}/>
						<Redirect to="messenger"/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
