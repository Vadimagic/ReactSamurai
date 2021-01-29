import { useRef } from 'react'
import { addMessageActionCreator } from '../../../../redux/state'
import classes from './AddMessage.module.css'

const AddMessage = ({dispatch}) => {
	const textRef = useRef(null)

	const submitPost = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			dispatch(addMessageActionCreator(textRef.current.innerText))
			textRef.current.innerText = ''
		}
	}

	// const clickSubmitPost = (e) => {
	// }

	return (
		<div className={classes.add_message}>
			<div 
				className={classes.textarea} 
				ref={textRef}
				aria-multiline="true" 
				contentEditable={true}
				onKeyPress={submitPost}
			></div>
			<button className={classes.submit_message}></button>
		</div>
	)
}

export default AddMessage