import { useRef } from 'react'
import { addMessageActionCreator } from '../../../../redux/state'
import classes from './AddMessage.module.css'

const AddMessage = ({dispatch}) => {
	const textRef = useRef(null)

	const submitPost = () => {
		dispatch(addMessageActionCreator(textRef.current.innerText))
		textRef.current.innerText = ''
	}

	return (
		<div className={classes.add_message}>
			<div 
				className={classes.textarea} 
				ref={textRef}
				aria-multiline="true" 
				contentEditable={true}
			></div>
			<button 
				className={classes.submit_message} 
				onClick={() => submitPost()}
			>Отправить</button>
		</div>
	)
}

export default AddMessage