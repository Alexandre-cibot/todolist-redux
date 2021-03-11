import {connect} from 'react-redux'

function TodoListCompleted({completed}) {
  return (
    <div>
      <h3>Completed</h3>
      <ul>
        {completed.map(todo => (
          <li key={todo.id} className="completed">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    completed: state.todos?.filter(todo => todo.done) || []
  }
}

export default connect(
  mapStateToProps
)(TodoListCompleted)