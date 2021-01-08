import classes from './Header.module.css'

const Header = () => (
	<header className={classes.header}>
		<div className={classes.content}>
			<img className={classes.image} src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399" alt=""/>
		</div>
	</header>
)

export default Header