import { ADD_TODO } from "../actions/actionTypes"

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
          title: action.payload.title
        }
      ]
    }
    default: {
      return state
    }
  }
}