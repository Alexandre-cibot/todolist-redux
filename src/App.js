import { Provider } from 'react-redux';
import './App.css';
import TodoList  from './components/TodoList';
import store from './redux/store'

// Implémenter une todolist
// Creation de nouveau todo
// Affichage des todos, et de leur etat (terminé ou non)
// Enn ulisant redux
function App() {
  const todos = [
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
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList todos={todos} />
      </div>
    </Provider>
  );
}

export default App;
