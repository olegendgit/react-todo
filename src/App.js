import logo from './logo.svg';
import './App.css';
//Importing Components 
import Form from "./componets/Form";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <header>
      <h1>My to-do list for today</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
};

export default App;
