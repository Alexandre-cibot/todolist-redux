import { Provider } from 'react-redux';
import './App.css';
import TodoList  from './components/TodoList';
import TodoListCompleted  from './components/TodoListCompleted';
import store from './redux/store'

// Implémenter une todolist
// Creation de nouveau todo
// Affichage des todos, et de leur etat (terminé ou non)
// Enn ulisant redux
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <TodoListCompleted />
      </div>
    </Provider>
  );
}

export default App;
