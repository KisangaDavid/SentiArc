import transparentLogo from './TransparentLogo.png';
import InputAndSubmit from './InputAndSubmit'
import '../App.css';


function Home() {
  return (
      <div className="App">
        <header className="App-header">
        <h2 style={{color: "rgb(225, 221, 221)", fontFamily: "Goudy Old Style, Goudy Old Style", fontWeight: "bold", fontSize: "2.5rem"}}>Company public sentiment for the people!</h2>
          <img src={transparentLogo} className="App-logo" alt="logo" style={{marginBottom: "1rem", marginTop: "2rem"}}/>
          <p>
            <InputAndSubmit />
          </p>
        </header>
      </div>
  );
}

export default Home;