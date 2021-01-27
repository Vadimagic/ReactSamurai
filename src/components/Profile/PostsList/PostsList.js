import AddPost from './AddPost/AddPost'
import Post from './Post/Post'
import classes from './PostsList.module.css'

const PostsList = ({posts, addPost}) => (
	<div className={classes.posts}>
		<AddPost addPost={addPost}/>
		{posts.map(post => {
			return <Post post={post} key={post.id}/>
		})}
	</div>
)

export default PostsList