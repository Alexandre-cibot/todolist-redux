import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes"

let nextId = 2

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextId,
      title,
    }
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  }
}