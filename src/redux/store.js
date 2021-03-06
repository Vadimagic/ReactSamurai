import { profileReducer } from './reducers/profile'
import { ADD_MESSAGE, ADD_POST } from "./actionTypes";
import { messengerReducer } from './reducers/messenger';

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
				{id: '6f4tfgvw', name: 'Дима', avatar: 'https://sun9-35.userapi.com/impf/zJJKK-wyv9LgDuOS38hJxpYtn4Uc7DHx85Fw1A/4mZ9YkACIBM.jpg?size=1586x1190&quality=96&proxy=1&sign=4deceab8cee9c74b12e2c4fa76a8d271&type=album'},
				{id: 'z773pds3', name: 'Семен', avatar: 'https://img06.rl0.ru/afisha/e350x350p492x0f1080x1080q85i/s2.afisha.ru/mediastorage/3d/a7/c12ce10ae3e14a23a62b792aa73d.jpg'},
			],
			exampleMessagesForDialog: [
				{id: '142ds2wf', author: 'Дима', authorId: 'dimooon', avatar: 'https://sun9-35.userapi.com/impf/zJJKK-wyv9LgDuOS38hJxpYtn4Uc7DHx85Fw1A/4mZ9YkACIBM.jpg?size=1586x1190&quality=96&proxy=1&sign=4deceab8cee9c74b12e2c4fa76a8d271&type=album', text: 'Привет'},
				{id: '234rwesd', author: 'Дима', authorId: 'dimooon', avatar: 'https://sun9-35.userapi.com/impf/zJJKK-wyv9LgDuOS38hJxpYtn4Uc7DHx85Fw1A/4mZ9YkACIBM.jpg?size=1586x1190&quality=96&proxy=1&sign=4deceab8cee9c74b12e2c4fa76a8d271&type=album', text: 'Как дела?'},
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
		// this._state.profilePage.profilePosts = profileReducer(this.state.profilePage.profilePosts, action)
		// this._state.messengerPage.exampleMessagesForDialog = messengerReducer(this.state.messengerPage.exampleMessagesForDialog, action)
		switch(action.type) {
			case ADD_POST: this._addPost(action.text); break;
			case ADD_MESSAGE: this._addMessage(action.text); break;
			default: console.log(`What is this type: ${action.type} ?!? (maybe you were wrong?)`)
		}
		// this.rerenderEntireTree(this._state)
	},

	_addPost(postText = '', postImage = '') {
		if (postText.trim() || postImage) {
			postText = postText.replace(/(^\n+)|(\n+$)/g, '').replace(/(\n){3,}/g, '\n\n').replace(/\n/g, '<br>') // replace \n -> <br> for display line br(break) & replace 3+ br line on 2 br
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
			postText = postText.replace(/(^\n+)|(\n+$)/g, '').replace(/(\n){3,}/g, '\n\n').replace(/\n/g, '<br>') // replace \n -> <br> for display line br(break) & replace 3+ br line on 2 br
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