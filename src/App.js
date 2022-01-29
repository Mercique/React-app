import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/message';
import { Counter } from './components/Counter/counter';

const user = {
  name: "Ilya",
  surname: "Chvanov"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message user = { user } />
        <Counter />
      </header>
    </div>
  );
}

export default App;
