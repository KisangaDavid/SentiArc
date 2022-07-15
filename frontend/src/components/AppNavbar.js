import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './components.css'
function AppNavBar(props) {
    return (
        <nav class="justify-content-center navbar navbar-dark" style = {{background: "#282c34", textAlign: "center", fontSize: "1.3rem", fontFamily: "Times New Roman"}}>
        <Navbar>
            <Nav>
                <div style={{marginLeft: "4vw", marginRight: "4vw"}}>
                <LinkContainer to="/TweetsPage" state={{companyName : props.companyName}}>
                    <Nav.Link>Top Tweets</Nav.Link>
                </LinkContainer >
                </div>
                <div style={{marginLeft: "4vw", marginRight: "4vw"}}>
                <LinkContainer to="/ArticlesPage" state={{companyName : props.companyName}}>
                    <Nav.Link>Hot News</Nav.Link>
                </LinkContainer>
                </div>
                <div style={{marginLeft: "4vw", marginRight: "4vw"}}>
                <LinkContainer to="/TrendsPage" state={{companyName : props.companyName}}>
                    <Nav.Link>Popularity</Nav.Link>
                </LinkContainer>
                </div>
                <div style={{marginLeft: "4vw", marginRight: "4vw"}}>
                <LinkContainer to="/">
                    <Nav.Link>New Search</Nav.Link>
                </LinkContainer>
                </div>
            </Nav>
        </Navbar>
        </nav>
    );
}

export default AppNavBar;