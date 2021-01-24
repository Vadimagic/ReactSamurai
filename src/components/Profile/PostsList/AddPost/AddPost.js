import { useState } from 'react'
import {addPost} from '../../../../redux/state'
import classes from './AddPost.module.css'

const AddPost = () => {
	const [text, setText] = useState('')
	
	const submitPost = () => {
		addPost(text)
		setText('')
	}

	const updateText = (e) => {
		setText(e.target.innerText)
	}

	return (
		<div className={classes.add_post + ' ' + classes.block}>
			<div 
				className={classes.textarea} 
				aria-multiline="true" 
				contentEditable={true}
				onInput={updateText}
				onBlur={updateText}
			></div>
			<button 
				className={classes.submit_post} 
				onClick={() => submitPost()}
			>Отправить</button>
		</div>
	)
}

export default AddPost