import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = ({dialog}) => {
	return (
		<NavLink to={`/messenger/${dialog.id}`} className={classes.dialog}>
			<img className={classes.dialog__photo} src={dialog.avatar} alt="Avatar"/>
			<div className={classes.dialog__content}>
				<div className={classes.dialog__name}>
					{dialog.name}
				</div>
			</div>
		</NavLink>
	)
}

export default DialogItem