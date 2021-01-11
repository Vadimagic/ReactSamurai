import classes from './Messenger.module.css'

const Messenger = () => {
	return (
		<div className={classes.content}>
			<div className={classes.list_dialogs}>
				<div className={classes.item}>
					Vadim
				</div>
				<div className={classes.item}>
					Dima
				</div>
				<div className={classes.item}>
					Dima
				</div>
			</div>
			<div clasaName={classes.messages}>
				<div className={classes.message}>Привет</div>
				<div className={classes.message}>Как дела?</div>
				<div className={classes.message}>Что делаешь?</div>
			</div>
		</div>
	)
}

export default Messenger