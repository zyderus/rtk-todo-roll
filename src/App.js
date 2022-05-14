import './App.css';
import AddTodo from './components/AddTodo/addTodo';
import TodoList from './components/TodoList/todoList';

function App() {
  return (
    <div className="App">
      <h1 className="header">Ninja Todos</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
