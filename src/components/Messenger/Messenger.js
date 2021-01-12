import classes from './Messenger.module.css'

const Messenger = () => {
	return (
		<div className={classes.block}>
			<div className={classes.dialogs}>
				<div className={classes.dialog}>
					<img className={classes.dialog__photo} src="https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg" alt="Avatar"/>
					<div className={classes.dialog__content}>
						<div className={classes.dialog__name}>
							Вадим
						</div>
					</div>
				</div>
				<div className={classes.dialog + ' ' + classes.dialog_active}>
					<img className={classes.dialog__photo} src="https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg" alt="Avatar"/>
					<div className={classes.dialog__content}>
						<div className={classes.dialog__name}>
							Дима
						</div>
					</div>
				</div>
				<div className={classes.dialog}>
					<img className={classes.dialog__photo} src="https://img06.rl0.ru/afisha/e350x350p492x0f1080x1080q85i/s2.afisha.ru/mediastorage/3d/a7/c12ce10ae3e14a23a62b792aa73d.jpg" alt="Avatar"/>
					<div className={classes.dialog__content}>
						<div className={classes.dialog__name}>
							Семён
						</div>
					</div>
				</div>
			</div>
			<div className={classes.messages}>
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
			</div>
		</div>
	)
}

export default Messenger