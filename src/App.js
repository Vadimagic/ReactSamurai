import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
	const profilePosts = [
		{id: 'GS3sfe342S', author: 'Вадим', authorId: '21wddscfa', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
		content: {text: 'Как прекрасно жить в этом мире, вы согласны?', image: 'https://wallscloud.net/uploads/cache/914086997/anime-art-devushka-spina-1024x576-MM-90.jpg'}, likesCount: 3},
		{id: 'GD32dSFgdd', author: 'Вадим', authorId: '21wddscfa', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
		content: {text: '', image: 'https://lh3.googleusercontent.com/7PtRH83w1K13OpR4JLotEhogmIvWHTggpsgHThN-LPzLfOPR9RnpQXLT86KEhS-kQ56NifE80vo6FekpScb4Co5HhFM=w640-h400-e365-rj-sc0x00ffffff'}, likesCount: 3}
	]

	return (
		<BrowserRouter>
			<Header />
			<div className="wrapper">
				<Navbar />
				<div className="wrapper__content">
					<Switch>
						<Route path="/profile" render={() => <Profile posts={profilePosts}/>}/>
						<Route path="/messenger" component={Messenger}/>
						<Redirect to="messenger"/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
