
import {addTodo} from '../redux/actions/actions'
import {connect} from 'react-redux'
import {useState} from 'react'

function isEnterKey(key) {
  return key === 'Enter'
}

function TodoList({todos, addTodo}) {
  const [text, setText] = useState('')
  const toggleCheck = () =>   console.log('toggle check')
  const handleAddTodo = () => {
    addTodo(text)
    setText('')
  }

  
  return (
    <div>
      <input type="text" onKeyDown={e => isEnterKey(e.key) && handleAddTodo()} value={text} onChange={(e) => setText(e.target.value)}/>
      <ul>
        {todos.map(todo => (
          <li>
            <input type="checkbox" onClick={toggleCheck}/>
            <span>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(
  mapStateToProps,
  {addTodo}
)(TodoList)