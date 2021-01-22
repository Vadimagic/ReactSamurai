import classes from './AddMessage.module.css'

const AddMessage = () => {
	return (
		<div className={classes.textarea} tabIndex="0" role="textbox" aria-multiline="true" contentEditable="PLAINTEXT-ONLY" data-role="editable" aria-label="Присоединиться к обсуждению...">
		</div>
	)
}

export default AddMessage