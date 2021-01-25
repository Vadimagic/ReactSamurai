import PostsList from './PostsList/PostsList'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const Content = ({profileState}) => (
	<>
		<ProfileInfo />
		<PostsList posts={profileState.profilePosts}/>
	</>
)

export default Content