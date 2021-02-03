import { combineReducers, createStore } from "redux";
import { profileReducer } from './reducers/profile'
import { messengerReducer } from './reducers/messenger'

const reducers = combineReducers({
  profilePage: profileReducer,
  messengerPage: messengerReducer
})

const store = createStore(reducers)

export default store 