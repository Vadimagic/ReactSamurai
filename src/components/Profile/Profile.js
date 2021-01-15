import classes from './Profile.module.css'
import PostsList from './PostsList/PostsList'

const Content = () => (
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
		<PostsList posts={[
			{id: 'GS3sfe342S', author: 'Вадим', authorId: '21wddscfa', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
			content: {text: 'Как прекрасно жить в этом мире, вы согласны?', image: 'https://wallscloud.net/uploads/cache/914086997/anime-art-devushka-spina-1024x576-MM-90.jpg'}, likesCount: 3},
			{id: 'GD32dSFgdd', author: 'Вадим', authorId: '21wddscfa', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
			content: {text: '', image: 'https://lh3.googleusercontent.com/7PtRH83w1K13OpR4JLotEhogmIvWHTggpsgHThN-LPzLfOPR9RnpQXLT86KEhS-kQ56NifE80vo6FekpScb4Co5HhFM=w640-h400-e365-rj-sc0x00ffffff'}, likesCount: 3}
		]}/>
	</>
)

export default Content