import { ADD_TODO } from "./actionTypes"

let nextId = 0

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextId,
      title
    }
  }
}