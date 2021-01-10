import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => (
	<nav className={classes.navbar}>
		<ul className={classes.list}>
			<li className={classes.item}>
				<NavLink className={classes.link} to="/profile">Профиль</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={classes.link} to="/messenger">Сообщения</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={classes.link} to="/news">Новости</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={classes.link} to="/music">Музыка</NavLink>
			</li>
		</ul>
	</nav>
)

export default Navbar