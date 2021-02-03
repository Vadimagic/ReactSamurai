import { ADD_MESSAGE } from "../actionTypes"

export const messengerReducer = (state, action) => {
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