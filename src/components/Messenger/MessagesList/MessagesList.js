import AddMessage from './AddMessage/AddMessage'
import MessageItem from './MessageItem/MessageItem'
import classes from './MessagesList.module.css'

const MessagesList = ({messages, dispatch}) => {
	return (
		<div className={classes.messages}>
			<div className={classes.list_messages}>
				{
					messages.map(message => {
						return <MessageItem message={message} key={message.id}/>
					})
				}
			</div>
			<AddMessage dispatch={dispatch}/>
		</div>
	)
}

export default MessagesList