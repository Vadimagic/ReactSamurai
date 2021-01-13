import DialogItem from './DialogItem/DialogItem'
import classes from './DialogList.module.css'

const DialogsList = ({dialogs}) => {
	return (
		<div className={classes.dialogs}>
			{
				dialogs.map((dialog, index) => {
					return <DialogItem dialog={dialog} index={index} key={dialog.id}/>
				})
			}
		</div>
	)
}

export default DialogsList