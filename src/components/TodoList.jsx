
import {addTodo, toggleTodo, removeTodo} from '../redux/actions/actions'
import {connect} from 'react-redux'
import {useState} from 'react'
import './TodoList.css'

function isEnterKey(key) {
  return key === 'Enter'
}

function TodoList({todos, addTodo, toggleTodo, removeTodo}) {
  const [text, setText] = useState('')
  const handleAddTodo = () => {
    if(text.length) {
      addTodo(text)
      setText('') 
    }
  }

  
  return (
    <div>
      <input type="text" onKeyDown={e => isEnterKey(e.key) && handleAddTodo()} value={text} onChange={(e) => setText(e.target.value)}/>
      <h3>Todos</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" onClick={() => toggleTodo(todo.id)} value={todo.done}/>
            <span className={todo.done ? 'completed' : ''}>
              {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos || []
  }
}

export default connect(
  mapStateToProps,
  {addTodo, toggleTodo, removeTodo}
)(TodoList)