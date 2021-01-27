import { useRef } from 'react'
import classes from './AddPost.module.css'

const AddPost = ({dispatch}) => {
	const textRef = useRef(null)
	
	const submitPost = () => {
		dispatch({type:'ADD_POST', text: textRef.current.innerText})
		textRef.current.innerText = ''
	}

	return (
		<div className={classes.add_post + ' ' + classes.block}>
			<div 
				className={classes.textarea} 
				ref={textRef}
				aria-multiline="true" 
				contentEditable={true}
			></div>
			<button 
				className={classes.submit_post} 
				onClick={() => submitPost()}
			>Отправить</button>
		</div>
	)
}

export default AddPost