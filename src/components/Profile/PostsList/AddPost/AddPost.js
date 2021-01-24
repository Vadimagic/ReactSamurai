import {addPost} from '../../../../redux/state'
import classes from './AddPost.module.css'

const AddPost = () => {
	
	const submitPost = (e) => {
		e.preventDefault()
		addPost(e.target.children[0].innerText)
		e.target.children[0].innerText = ''
	}

	return (
		<form className={classes.add_post + ' ' + classes.block} onSubmit={(e) => submitPost(e)}>
			<div 
				className={classes.textarea} 
				aria-multiline="true" 
				contentEditable={true}
				suppressContentEditableWarning={true}
			></div>
			<button className={classes.submit_post}>Отправить</button>
		</form>
	)
}

export default AddPost