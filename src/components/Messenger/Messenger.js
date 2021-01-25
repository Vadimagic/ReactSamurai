import DialogsList from './DialogsList/DialogsList'
import MessagesList from './MessagesList/MessagesList'
import classes from './Messenger.module.css'

const Messenger = ({messengerState}) => {
	return (
		<div className={classes.block}>
			<DialogsList dialogs={messengerState.messengerDialogs}/>
			<MessagesList messages={messengerState.exampleMessagesForDialog}/>
		</div>
	)
}

export default Messenger