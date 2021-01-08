import './Content.css'

const Content = () => (
	<div className="content">
		<div className="content__block">
			<img className="content__img" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Background"/>
		</div>
		<div className="content__info content__block">
			<img className="content__avatar" src="https://sun9-18.userapi.com/impg/c854520/v854520979/1986cf/cI-Et1pyGsw.jpg?size=353x383&quality=96&proxy=1&sign=7d9ca54044a285792c1999c220c24750&type=album" alt="Oden"/>
			<div className="content__description"></div>
		</div>
		<div className="content__posts">
			<form className="content__add-post content__block">
				<div className="form-block">
				<textarea className="content__add-text"></textarea>
				</div>
				<button className="content__submit-post">Отправить</button>
			</form>
			<div className="content__post content__block">
				<div className="content__post-author">
					<img className="content__post-avatar" src="https://sun9-28.userapi.com/impf/c840629/v840629925/732ab/rYpcddjfw1w.jpg?size=901x887&quality=96&proxy=1&sign=7695574402391908780a4b0705b103e6&type=album" alt="Avatar"/>
				</div>
				<div className="content__post-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur magnam obcaecati voluptates amet, vero facilis iure doloremque nulla perspiciatis!</div>
			</div>
		</div>
	</div>
)

export default Content