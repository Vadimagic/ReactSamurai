import { ADD_MESSAGE } from "../actionTypes"

const initialState = {
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

export const messengerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: return [...state, {
			id: String(Date.now()), 
			author: 'Вадим', 
			authorId: 'vadimagic', 
			avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
			text: action.text
		}]
		default : return state
	}
}