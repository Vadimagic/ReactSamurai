import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MessageItem.module.css'

const MessageItem = ({message}) => {
	return (
		<div className={classes.message}>
			<NavLink to={`/${message.authorId}`}><img className={classes.message__photo} src={message.avatar} alt="Avatar"/></NavLink>
			<div className={classes.message__block}>
				<NavLink to={`/${message.authorId}`} className={classes.message__author}>
					{message.author}
				</NavLink>
				<div className={classes.message__content}>
					{message.text.split(/<br\/*>/ig).map((text, i) => {
						return <Fragment key={i}>{text}<br/></Fragment>
					})}
				</div>
			</div>
		</div>
	)
}

export default MessageItem