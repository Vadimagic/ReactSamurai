import { Fragment } from 'react'
import classes from './MessageItem.module.css'

const MessageItem = ({message}) => {
	return (
		<div className={classes.message}>
			<img className={classes.message__photo} src={message.avatar} alt="Avatar"/>
			<div className={classes.message__block}>
				<div className={classes.message__author}>
					{message.author}
				</div>
				<div className={classes.message__content}>
					{message.text.split('<br/>').map((text, i) => {
						return <Fragment key={i}>{text}<br/></Fragment>
					})}
				</div>
			</div>
		</div>
	)
}

export default MessageItem