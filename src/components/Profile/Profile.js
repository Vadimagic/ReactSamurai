import { useEffect } from 'react'
import PostsList from './PostsList/PostsList'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const Content = ({profileState, addPost}) => {
	useEffect(() => {
		document.title = 'Профиль'
	}, [])
	
	return (
		<>
			<ProfileInfo />
			<PostsList posts={profileState.profilePosts} addPost={addPost}/>
		</>
	)
}

export default Content