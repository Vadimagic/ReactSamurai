import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App({state : {profilePage, messengerPage}, dispatch}) {
	return (
		<BrowserRouter>
			<Header />
			<div className="wrapper">
				<Navbar />
				<div className="wrapper__content">
					<Switch>
						<Route path="/profile" render={() => <Profile profileState={profilePage} dispatch={dispatch}/>}/>
						<Route path="/messenger" render={() => <Messenger messengerState={messengerPage}/>}/>
						<Redirect to="messenger"/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
