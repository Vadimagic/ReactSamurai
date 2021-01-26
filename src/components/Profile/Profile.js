import { useEffect } from 'react'
import PostsList from './PostsList/PostsList'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const Content = ({profileState}) => {
	useEffect(() => {
		document.title = 'Профиль'
	}, [])
	
	return (
		<>
			<ProfileInfo />
			<PostsList posts={profileState.profilePosts}/>
		</>
	)
}

export default Content