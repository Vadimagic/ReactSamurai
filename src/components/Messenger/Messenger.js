import DialogsList from './DialogsList/DialogsList'
import MessagesList from './MessagesList/MessagesList'
import classes from './Messenger.module.css'

const Messenger = ({dialogs, messages}) => {
	return (
		<div className={classes.block}>
			<DialogsList dialogs={dialogs}/>
			<MessagesList messages={messages}/>
		</div>
	)
}

export default Messenger