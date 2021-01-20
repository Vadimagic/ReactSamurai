import PostsList from './PostsList/PostsList'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const Content = ({posts}) => (
	<>
		<ProfileInfo />
		<PostsList posts={posts}/>
	</>
)

export default Content