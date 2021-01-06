import './Navbar.css'

const Navbar = () => (
	<nav className="navbar">
		<ul className="navbar__list">
			<li className="navbar__item">
				<a className="navbar__link" href="/">Profile</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link" href="/">Messages</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link" href="/">News</a>
			</li>
			<li className="navbar__item">
				<a className="navbar__link" href="/">Music</a>
			</li>
		</ul>
	</nav>
)

export default Navbar