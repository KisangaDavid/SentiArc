import ArticleCard from './components/ArticleCard.js';
import InputAndSubmit from './components/InputAndSubmit';
import TweetsPage from './components/TweetsPage';
import TrendsPage from './components/TrendsPage';
import PostSubmitPage from './components/PostSubmitPage';
import Home from './components/Home';
import ArticlesPage from './components/ArticlesPage'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/PostSubmitPage" element={<PostSubmitPage />}/>
        <Route path="/ArticlesPage" element={<ArticlesPage />}/>
        <Route path="/TweetsPage" element={<TweetsPage />}/>
        <Route path="/TrendsPage" element={<TrendsPage />}/>
        </Routes>
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