import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
	return (
		<>
			<div className={classes.block}>
				<img className={classes.img_profile} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Background"/>
			</div>
			<div className={classes.info + ' ' + classes.block}>
				<img className={classes.avatar} src="https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg" alt="avatar"/>
				<div className={classes.description}>
					<h1 className={classes.name}>Вадим</h1>
					<span className={classes.thought}>“Shoot for the moon. Even if you miss, you'll land among the stars.”</span>
					<ul className={classes.social}>
						<li className={classes.item + ' ' + classes.friends}>
							<span className={classes.count}>46</span>
							<span className={classes.text}>друзья</span>
						</li>
						<li className={classes.item + ' ' + classes.posts}>
							<span className={classes.count}>2</span>
							<span className={classes.text}>посты</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}