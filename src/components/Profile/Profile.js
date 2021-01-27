import { useEffect } from 'react'
import PostsList from './PostsList/PostsList'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const Content = ({profileState, dispatch}) => {
	useEffect(() => {
		document.title = 'Профиль'
	}, [])
	
	return (
		<>
			<ProfileInfo />
			<PostsList posts={profileState.profilePosts} dispatch={dispatch}/>
		</>
	)
}

export default Content