import classes from './AddPost.module.css'

const AddPost = () => {
	return (
		<form className={classes.add_post + ' ' + classes.block}>
			<div className={classes.form_block}>
				<textarea className={classes.add_text}></textarea>
			</div>
			<button className={classes.submit_post}>Отправить</button>
		</form>
	)
}

export default AddPost