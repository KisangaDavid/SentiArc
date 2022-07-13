import AppNavbar from './AppNavbar';
import { useLocation } from "react-router-dom";

function TweetsPage() {
    const location = useLocation();
    const companyName = location.state.companyName;
    return (
        <div className="TweetsPage">
          <AppNavbar companyName = {companyName} />
          <header className="App-header">
          <h1>This is the Tweets Page!</h1>
          </header>
        </div>
    );
  }

  export default TweetsPage;