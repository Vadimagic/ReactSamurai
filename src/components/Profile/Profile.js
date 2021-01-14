import classes from './Profile.module.css'
import PostsList from './PostsList/PostsList'

const Content = () => (
	<>
		<div className={classes.block}>
			<img className={classes.img_profile} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Background"/>
		</div>
		<div className={classes.info + ' ' + classes.block}>
			<img className={classes.avatar} src="https://sun9-18.userapi.com/impg/c854520/v854520979/1986cf/cI-Et1pyGsw.jpg?size=353x383&quality=96&proxy=1&sign=7d9ca54044a285792c1999c220c24750&type=album" alt="Oden"/>
			<div className={classes.description}></div>
		</div>
		<PostsList posts={[
			{id: 1, author: 'Дима', authorId: '21wddscfa', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg'}
		]}/>
	</>
)

export default Content