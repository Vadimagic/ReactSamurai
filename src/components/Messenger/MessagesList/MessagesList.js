import AddMessage from './AddMessage/AddMessage'
import MessageItem from './MessageItem/MessageItem'
import classes from './MessagesList.module.css'

const MessagesList = ({messages}) => {
	return (
		<div className={classes.messages}>
			<div className={classes.list_messages}>
				{
					messages.map(message => {
						return <MessageItem message={message} key={message.id}/>
					})
				}
			</div>
			<AddMessage />
		</div>
	)
}

export default MessagesList