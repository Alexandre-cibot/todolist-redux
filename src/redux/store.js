import { createStore } from 'redux'
import TodoReducer from './reducers/todosReducers'
  
const store = createStore(TodoReducer)
store.subscribe(() => console.log(store.getState()))
export default store