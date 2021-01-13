import { NavLink } from 'react-router-dom'
import DialogsList from './DialogsList/DialogsList'
import MessagesList from './MessagesList/MessagesList'
import classes from './Messenger.module.css'

const Messenger = () => {
	return (
		<div className={classes.block}>
			<DialogsList dialogs={[
				{id: '34fetqsg', name: 'Вадим', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg'},
				{id: '6f4tfgvw', name: 'Дима', avatar: 'https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg'},
				{id: 'z773pds3', name: 'Семен', avatar: 'https://img06.rl0.ru/afisha/e350x350p492x0f1080x1080q85i/s2.afisha.ru/mediastorage/3d/a7/c12ce10ae3e14a23a62b792aa73d.jpg'},
			]}/>
			{/* <div className={classes.dialogs}>
				<NavLink to="/messenger/34fetqsg" className={classes.dialog}>
					<img className={classes.dialog__photo} src="https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg" alt="Avatar"/>
					<div className={classes.dialog__content}>
						<div className={classes.dialog__name}>
							Вадим 
						</div>
					</div>
				</NavLink>
				<NavLink to="/messenger/6f4tfgvw" className={classes.dialog + ' ' + classes.dialog_active}>
					<img className={classes.dialog__photo} src="https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg" alt="Avatar"/>
					<div className={classes.dialog__content}>
						<div className={classes.dialog__name}>
							Дима
						</div>
					</div>
				</NavLink>
				<NavLink to="/messenger/z773pds3" className={classes.dialog}>
					<img className={classes.dialog__photo} src="https://img06.rl0.ru/afisha/e350x350p492x0f1080x1080q85i/s2.afisha.ru/mediastorage/3d/a7/c12ce10ae3e14a23a62b792aa73d.jpg" alt="Avatar"/>
					<div className={classes.dialog__content}>
						<div className={classes.dialog__name}>
							Семён
						</div>
					</div>
				</NavLink>
			</div> */}
			<MessagesList messages={[
				{id: '142ds2wf', author: 'Дима', avatar: 'https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg', text: 'Привет'},
				{id: '234rwesd', author: 'Дима', avatar: 'https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg', text: 'Как дела?'},
				{id: 'sdvd2r32', author: 'Вадим', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', text: 'Хорошо, <br/>А у тебя?'},
			]}/>
			{/* <div className={classes.messages}>
				<div className={classes.message}>
					<img className={classes.message__photo} src="https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg" alt="Avatar"/>
					<div className={classes.message__block}>
						<div className={classes.message__author}>
							Дима
						</div>
						<div className={classes.message__content}>
							Привет
						</div>
					</div>
				</div>
				<div className={classes.message}>
					<img className={classes.message__photo} src="https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg" alt="Avatar"/>
					<div className={classes.message__block}>
						<div className={classes.message__author}>
							Дима
						</div>
						<div className={classes.message__content}>
							Как дела?
						</div>
					</div>
				</div>
				<div className={classes.message}>
					<img className={classes.message__photo} src="https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg" alt="Avatar"/>
					<div className={classes.message__block}>
						<div className={classes.message__author}>
							Вадим
						</div>
						<div className={classes.message__content}>
							Хорошо, <br/>А у тебя?
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Messenger