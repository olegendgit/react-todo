import logo from './logo.svg';
import './App.css';
//Importing Components 
import Form from './componets/Form';

function App() {
  return (
    <div className="App">
      <header>
      <h1>My to-do list for today</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
