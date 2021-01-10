import classes from './Navbar.module.css'

const Navbar = () => (
	<nav className={classes.navbar}>
		<ul className={classes.list}>
			<li className={classes.item}>
				<a className={classes.link} href="/profile">Профиль</a>
			</li>
			<li className={classes.item}>
				<a className={classes.link} href="/messenger">Сообщения</a>
			</li>
			<li className={classes.item}>
				<a className={classes.link} href="/news">Новости</a>
			</li>
			<li className={classes.item}>
				<a className={classes.link} href="/music">Музыка</a>
			</li>
		</ul>
	</nav>
)

export default Navbar