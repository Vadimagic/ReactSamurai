import classes from './AddPost.module.css'

const AddPost = () => {
	return (
		<form className={classes.add_post + ' ' + classes.block}>
			<div className={classes.textarea} tabIndex="0" role="textbox" aria-multiline="true" contentEditable="PLAINTEXT-ONLY" data-role="editable" aria-label="Присоединиться к обсуждению..."></div>
			<button className={classes.submit_post}>Отправить</button>
		</form>
	)
}

export default AddPost