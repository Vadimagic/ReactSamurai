import classes from './Navbar.module.css'

const Navbar = () => (
	<nav className={classes.navbar}>
		<ul className={classes.list}>
			<li className={classes.item}>
				<a className={classes.link} href="/">Profile</a>
			</li>
			<li className={classes.item}>
				<a className={classes.link} href="/">Messages</a>
			</li>
			<li className={classes.item}>
				<a className={classes.link} href="/">News</a>
			</li>
			<li className={classes.item}>
				<a className={classes.link} href="/">Music</a>
			</li>
		</ul>
	</nav>
)

export default Navbar