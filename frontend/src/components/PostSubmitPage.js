import { useLocation } from "react-router-dom"
function PostSubmitPage(props) {
  const location = useLocation();
  const companyName = location.state.companyName;

  console.log(props);
    return (
        <div className="PostSubmitPage">
          <header className="App-header">
          <h1>This is the Post Submit page! Company Submitted: {companyName} </h1>
          </header>
        </div>
    );
  }

  export default PostSubmitPage;