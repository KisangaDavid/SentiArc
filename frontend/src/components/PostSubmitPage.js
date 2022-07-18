import { useLocation } from "react-router-dom";
import AppNavbar from './AppNavbar';
import React, { useState, useEffect } from 'react';



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
          <header className="App-header">
          <h1>This is the Post Submit page! Company Submitted: {companyName} </h1>
          <div class="custom-control custom-checkbox">
          <input onChange={handleChange} type="checkbox" class="custom-control-input" id="defaultUnchecked" style={{width: "1.2rem", height: "1.2rem", marginRight:".4rem"}} />
          <label class="custom-control-label" for="defaultUnchecked">Turn {censorMode ? "off" : "on"} censor mode</label>
      </div>
          </header>
        </div>
    );
  }

  export default PostSubmitPage;

  /*
  <div className="result">
  Censor Mode is {censorMode ? "on" : "off"}.
</div> */