import {combineReducers} from 'redux'
import TodoReducer from './todosReducer'

export default combineReducers({
  todos: TodoReducer
})