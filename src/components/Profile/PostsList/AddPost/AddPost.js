import { useState } from 'react'
import classes from './AddPost.module.css'

const AddPost = () => {
	const [text, setText] = useState('')

	return (
		<form className={classes.add_post + ' ' + classes.block}>
			<div className={classes.form_block}>
				<textarea value={text} className={classes.add_text} onChange={(e) => setText(e.target.value)}></textarea>
			</div>
			<button className={classes.submit_post}>Отправить</button>
		</form>
	)
}

export default AddPost