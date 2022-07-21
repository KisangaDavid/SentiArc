import { useLocation } from "react-router-dom";
import AppNavbar from './AppNavbar';
import React, { useState } from 'react';
import transparentLogo from './TransparentLogo.png'

function PostSubmitPage(props) {
  const [censorMode, setCensorMode] = useState(false);
  const location = useLocation();
  const companyName = location.state.companyName;

  function handleChange() {
    setCensorMode(!censorMode)
  }

    return (
        <div className="PostSubmitPage">
          <AppNavbar companyName={companyName} censorMode = {censorMode}/>
          <header className="postSubmitHeader">
          <p style={{marginTop: "9rem", color: "rgb(225, 221, 221)", fontFamily: "Goudy Old Style, Goudy Old Style", fontWeight: "bold", fontSize: "2rem"}}>Use the Navbar at the top of the page to explore information about {companyName}! </p>
          <img src={transparentLogo} class="App-logo" alt="logo" style={{height: "18rem", width: "18rem", marginBottom: "3rem", marginTop: "2rem"}}/>
          <div class="custom-control custom-checkbox">
          <input onChange={handleChange} type="checkbox" class="custom-control-input" id="defaultUnchecked" style={{width: "1.2rem", height: "1.2rem", marginRight:".4rem", marginTop:"2rem"}} />
          <label class="custom-control-label" for="defaultUnchecked" style = {{fontFamily: "Goudy Old Style, Goudy Old Style", fontSize: "1.5rem"}}>Turn {censorMode ? "off" : "on"} censor mode</label>
      </div>
          </header>
        </div>
    );
  }

  export default PostSubmitPage;
