import { ADD_POST } from "../actionTypes";

const initialState = {
	profilePage: {
		profilePosts: [
			{id: 'GS3sfe342S', author: 'Вадим', authorId: 'vadimagic', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
			content: {text: 'Как прекрасно жить в этом мире, вы согласны?', image: 'https://wallscloud.net/uploads/cache/914086997/anime-art-devushka-spina-1024x576-MM-90.jpg'}, likesCount: 3},
			{id: 'GD32dSFgdd', author: 'Вадим', authorId: 'vadimagic', avatar: 'https://images-na.ssl-images-amazon.com/images/I/712dV%2BdZpdL._AC_SY679_.jpg', 
			content: {text: '', image: 'https://lh3.googleusercontent.com/7PtRH83w1K13OpR4JLotEhogmIvWHTggpsgHThN-LPzLfOPR9RnpQXLT86KEhS-kQ56NifE80vo6FekpScb4Co5HhFM=w640-h400-e365-rj-sc0x00ffffff'}, likesCount: 3}
		]
	}
}

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