import ArticleCard from './components/ArticleCard.js';
import InputAndSubmit from './components/InputAndSubmit';
import Home from './components/Home';
import ArticlesPage from './components/ArticlesPage'
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <div className = "content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ArticlesPage">
              <ArticlesPage />
            </Route>
            <Route exact path="/TweetsPage">

            </Route>
            <Route exact path="TrendsPage">
              
            </Route>
          </Switch>
          </div>
        </header>
      </div>
        
    </Router>
  );
}

export default App;

          /* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */