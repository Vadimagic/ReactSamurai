import { NavLink } from 'react-router-dom'
import classes from './Post.module.css'

const Post = ({post}) => (
	<div className={classes.post + ' ' + classes.block}>
		<div className={classes.post_author}>
			<img className={classes.post_avatar} src="https://sun9-28.userapi.com/impf/c840629/v840629925/732ab/rYpcddjfw1w.jpg?size=901x887&quality=96&proxy=1&sign=7695574402391908780a4b0705b103e6&type=album" alt="Avatar"/>
			<NavLink to={`/profile/${post.authorId}`} className={classes.post_link}>{post.author}</NavLink>
		</div>
		<div className={classes.post_info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur magnam obcaecati voluptates amet, vero facilis iure doloremque nulla perspiciatis!</div>
	</div>
)

export default Post