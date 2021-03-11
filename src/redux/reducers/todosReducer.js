import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/actionTypes"

const initialState = [
  {
    id: 1,
    title: 'Manger des frutis',
    done: false 
  },
  {
    id: 2,
    title: 'Faire du sport',
    done: false 
  }
]

export default function TodoReducer (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          done: typeof action.payload.done !== "undefined" ? action.payload.done : false
        }
      ]
    }
    case TOGGLE_TODO: {
      return state.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              done: !todo.done
            }
          } else {
            return todo
          }
        })
    }
    case REMOVE_TODO: {
      console.log('remove todo')
      return state.filter(todo => todo.id !== action.payload.id)
    }
    default: {
      return state
    }
  }
}