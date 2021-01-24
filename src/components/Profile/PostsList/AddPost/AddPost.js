import { useState } from 'react'
import {addPost} from '../../../../redux/state'
import classes from './AddPost.module.css'

const AddPost = () => {
	const [text, setText] = useState('')
	
	const submitPost = (e) => {
		e.preventDefault()
		addPost(text)
		setText('')
	}

	const updateText = (e) => {
		setText(e.target.innerText)
	}

	return (
		<form className={classes.add_post + ' ' + classes.block} onSubmit={(e) => submitPost(e)}>
			<div 
				className={classes.textarea} 
				aria-multiline="true" 
				contentEditable={true}
				onInput={updateText}
				onBlur={updateText}
			></div>
			<button className={classes.submit_post}>Отправить</button>
		</form>
	)
}

export default AddPost