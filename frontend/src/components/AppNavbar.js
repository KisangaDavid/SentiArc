import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function AppNavBar(props) {
    return (
        <Navbar>
            <Nav className="mr-auto">
                <LinkContainer to="/TweetsPage" state={{companyName : props.companyName}}>
                    <Nav.Link>Top Tweets</Nav.Link>
                </LinkContainer >
                <LinkContainer to="/ArticlesPage" state={{companyName : props.companyName}}>
                    <Nav.Link>Hot News</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/TrendsPage" state={{companyName : props.companyName}}>
                    <Nav.Link>Popularity</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link>New Search</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

export default AppNavBar;