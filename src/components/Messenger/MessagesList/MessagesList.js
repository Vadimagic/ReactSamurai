import MessageItem from './MessageItem/MessageItem'
import classes from './MessagesList.module.css'

const MessagesList = ({messages}) => {
	return (
		<div className={classes.messages}>
			{
				messages.map(message => {
					return <MessageItem message={message} key={message.id}/>
				})
			}
		</div>
	)
}

export default MessagesList