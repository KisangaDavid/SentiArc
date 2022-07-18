import AppNavbar from './AppNavbar';
import { useLocation } from "react-router-dom";

function TrendsPage() {
    const location = useLocation();
    const companyName = location.state.companyName;
    const censorMode = location.state.censorMode;
    return (
        <div className="TrendsPage">
          <AppNavbar companyName = {companyName} censorMode = {censorMode} />
          <header className="App-header">
          <h1>This is the Trends Page!</h1>
          </header>
        </div>
    );
  }

  export default TrendsPage;