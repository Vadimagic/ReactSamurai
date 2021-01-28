const ADD_POST = "ADD_POST"
const ADD_MESSAGE = "ADD_MESSAGE"

const store = {
	_state: {
		profilePage: {
			profilePosts: [
				{id: 'GS3sfe342S', author: 'Вадим', authorId: 'vadimagic', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
				content: {text: 'Как прекрасно жить в этом мире, вы согласны?', image: 'https://wallscloud.net/uploads/cache/914086997/anime-art-devushka-spina-1024x576-MM-90.jpg'}, likesCount: 3},
				{id: 'GD32dSFgdd', author: 'Вадим', authorId: 'vadimagic', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
				content: {text: '', image: 'https://lh3.googleusercontent.com/7PtRH83w1K13OpR4JLotEhogmIvWHTggpsgHThN-LPzLfOPR9RnpQXLT86KEhS-kQ56NifE80vo6FekpScb4Co5HhFM=w640-h400-e365-rj-sc0x00ffffff'}, likesCount: 3}
			]
		},
		messengerPage: {
			messengerDialogs: [
				{id: '34fetqsg', name: 'Вадим', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg'},
				{id: '6f4tfgvw', name: 'Дима', avatar: 'https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg'},
				{id: 'z773pds3', name: 'Семен', avatar: 'https://img06.rl0.ru/afisha/e350x350p492x0f1080x1080q85i/s2.afisha.ru/mediastorage/3d/a7/c12ce10ae3e14a23a62b792aa73d.jpg'},
			],
			exampleMessagesForDialog: [
				{id: '142ds2wf', author: 'Дима', authorId: 'dimooon', avatar: 'https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg', text: 'Привет'},
				{id: '234rwesd', author: 'Дима', authorId: 'dimooon', avatar: 'https://avatanplus.com/files/photos/mid/59a2b4633c3f415e2390a3af.jpg', text: 'Как дела?'},
				{id: 'sdvd2r32', author: 'Вадим', authorId: 'vadimagic', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', text: 'Хорошо, <br/>А у тебя?'},
			]
		}
	},
	_callSubscriver() {},

	get state() {
		return this._state
	},
	
	subscribe(observer) {
		this.rerenderEntireTree = observer
	},

	dispatch(action) {
		switch(action.type) {
			case ADD_POST: this._addPost(action.text); break;
			case ADD_MESSAGE: this._addMessage(action.text); break;
			default: console.log(`What is this type: ${action.type} ?!? (maybe you were wrong?)`)
		}
	},

	_addPost(postText = '', postImage = '') {
		if (postText.trim() || postImage) {
			postText = postText.replace(/(\n){3,}/g, '\n\n').replace(/\n+$/, '').replace(/\n/g, '<br>') // replace \n -> <br> for display line br(break) & replace 3+ br line on 2 br
			const newPost = {
				id: String(Date.now()), 
				author: 'Вадим', 
				authorId: 'vadimagic', 
				avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
				content: {text: postText, image: postImage}, 
				likesCount: 0
			}
			this._state.profilePage.profilePosts.push(newPost)
			this.rerenderEntireTree(this._state)
		}
	},

	_addMessage(postText = '') {
		if (postText.trim()) {
			postText = postText.replace(/(\n){3,}/g, '\n\n').replace(/\n+$/, '').replace(/\n/g, '<br>') // replace \n -> <br> for display line br(break) & replace 3+ br line on 2 br
			const newMessage = {
				id: String(Date.now()), 
				author: 'Вадим', 
				authorId: 'vadimagic', 
				avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
				text: postText
			}
			this._state.messengerPage.exampleMessagesForDialog.push(newMessage)
			this.rerenderEntireTree(this._state)
		}
	}
}

export const addPostActionCreator = (text) => {
	return {
		type: ADD_POST,
		text
	}
}

export const addMessageActionCreator = (text) => {
	return {
		type: ADD_MESSAGE,
		text
	}
}

export default store