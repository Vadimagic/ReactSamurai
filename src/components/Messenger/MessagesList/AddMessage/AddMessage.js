import { useState } from 'react'
import classes from './AddMessage.module.css'

const AddMessage = () => {
	const [textMessage, setTextMessage] = useState('')

	const updateMessageText = (e) => {
		setTextMessage(e.target.innerText)
		console.log(textMessage)
	}

	return (
		<div 
			className={classes.textarea} 
			aria-multiline="true" 
			contentEditable={true}
			onInput={updateMessageText}
			onBlur={updateMessageText}
		></div>
	)
}

export default AddMessage