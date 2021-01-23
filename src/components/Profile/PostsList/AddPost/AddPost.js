import {addPost} from '../../../../redux/state'
import classes from './AddPost.module.css'

const AddPost = () => {
	
	const submitPost = (e) => {
		e.preventDefault()
		addPost(e.target.children[0].innerHTML)
		e.target.children[0].innerHTML = ''
	}

	return (
		<form className={classes.add_post + ' ' + classes.block} onSubmit={(e) => submitPost(e)}>
			<div className={classes.textarea} tabIndex="0" role="textbox" aria-multiline="true" contentEditable="PLAINTEXT-ONLY" data-role="editable" aria-label="Присоединиться к обсуждению..."></div>
			<button className={classes.submit_post}>Отправить</button>
		</form>
	)
}

export default AddPost