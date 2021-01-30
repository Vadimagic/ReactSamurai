import { ADD_POST } from "../actionTypes";

export const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST: return [...state, {
			id: String(Date.now()), 
			author: 'Вадим', 
			authorId: 'vadimagic', 
			avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
			content: {text: action.text}, 
			likesCount: 0
		}]
		default : return state
	}
}