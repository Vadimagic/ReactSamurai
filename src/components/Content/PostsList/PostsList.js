import Post from './Post/Post'
import classes from './PostsList.module.css'

const PostsList = () => (
	<div className={classes.posts}>
		<form className={classes.add_post + ' ' + classes.block}>
			<div className={classes.form_block}>
				<textarea className={classes.add_post}></textarea>
			</div>
			<button className={classes.submit_post}>Отправить</button>
		</form>
		<Post />
	</div>
)

export default PostsList