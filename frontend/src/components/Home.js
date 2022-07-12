import logo from './logo.svg';
import InputAndSubmit from './InputAndSubmit'
import '../App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return (
      <div className="App">
        <header className="App-header">
        <h1>App Name</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <InputAndSubmit />
          </p>
        </header>
      </div>
  );
}

export default Home;