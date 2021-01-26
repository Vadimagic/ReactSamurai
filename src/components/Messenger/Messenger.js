import { useEffect } from 'react'
import DialogsList from './DialogsList/DialogsList'
import MessagesList from './MessagesList/MessagesList'
import classes from './Messenger.module.css'

const Messenger = ({messengerState}) => {
	useEffect(() => {
		document.title = 'Сообщения'
	}, [])

	return (
		<div className={classes.block}>
			<DialogsList dialogs={messengerState.messengerDialogs}/>
			<MessagesList messages={messengerState.exampleMessagesForDialog}/>
		</div>
	)
}

export default Messenger