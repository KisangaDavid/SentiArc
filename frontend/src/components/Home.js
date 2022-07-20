import transparentLogo from './TransparentLogo.png';
import InputAndSubmit from './InputAndSubmit'
import '../App.css';


function Home() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={transparentLogo} className="App-logo" alt="logo" style={{marginBottom: "1rem"}}/>
          <p>
            <InputAndSubmit />
          </p>
        </header>
      </div>
  );
}

export default Home;