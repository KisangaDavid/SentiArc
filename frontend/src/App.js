import logo from './logo.svg';
import ArticleCard from './ArticleCard.js'
import InputAndSubmit from './InputAndSubmit'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>App Name</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <InputAndSubmit />
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
