import classes from './Content.module.css'

const Content = () => (
	<div className={classes.content}>
		<div className={classes.block}>
			<img className={classes.img_profile} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Background"/>
		</div>
		<div className={classes.info + ' ' + classes.block}>
			<img className={classes.avatar} src="https://sun9-18.userapi.com/impg/c854520/v854520979/1986cf/cI-Et1pyGsw.jpg?size=353x383&quality=96&proxy=1&sign=7d9ca54044a285792c1999c220c24750&type=album" alt="Oden"/>
			<div className={classes.description}></div>
		</div>
		<div className={classes.posts}>
			<form className={classes.add_post + ' ' + classes.block}>
				<div className={classes.form_block}>
					<textarea className={classes.add_post}></textarea>
				</div>
				<button className={classes.submit_post}>Отправить</button>
			</form>
			<div className={classes.post + ' ' + classes.block}>
				<div className={classes.post_author}>
					<img className={classes.post_avatar} src="https://sun9-28.userapi.com/impf/c840629/v840629925/732ab/rYpcddjfw1w.jpg?size=901x887&quality=96&proxy=1&sign=7695574402391908780a4b0705b103e6&type=album" alt="Avatar"/>
				</div>
				<div className={classes.post_info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur magnam obcaecati voluptates amet, vero facilis iure doloremque nulla perspiciatis!</div>
			</div>
		</div>
	</div>
)

export default Content