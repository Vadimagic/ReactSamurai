import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Post.module.css'

const Post = ({post}) => (
	<div className={classes.post + ' ' + classes.block}>
		<div className={classes.post_author}>
			<NavLink to={`/profile/${post.authorId}`}><img className={classes.post_avatar} src="https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg" alt="Avatar"/></NavLink>
			<NavLink to={`/profile/${post.authorId}`} className={classes.post_link}>{post.author}</NavLink>
		</div>
		<div className={classes.post_content}>
			{
				post.content.text
				? <div className={classes.post_text}>
					{post.content.text.split(/<br\/*>/ig).map((text, i) => {
						return <Fragment key={i}>{text}<br/></Fragment>
					})}
				</div>
				: null
			}
			{
				post.content.image
				? <img className={classes.post_image} src={post.content.image} alt="imgPost"/>
				: null
			}
			<div className={classes.social}>
				<div className={classes.like}>
					<div className={classes.icon_like + ' ' /* + classes.icon_like_active */}></div>
					<span className={classes.icon_label}>{post.likesCount}</span>
				</div>
			</div>
		</div>
	</div>
)

export default Post