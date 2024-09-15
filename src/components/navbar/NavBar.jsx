import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faBorderAll, faUser, faEnvelope, faBell, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';
//{/* import "./navBar.css"; NEEDS AMMENDING*/}
//{/* Code adapted from Lama Dev social media guide */}

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg" className="navBar" fixed= "top">
            <Navbar.Brand as={Link} to="/" className="sitename">
                Kinnect
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navBarLeft">
                    <Nav.Link as={Link} to="/">
                        <FontAwesomeIcon icon={faHouse} className="navBarIcon" /><span className="ml-2">Home</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to="#">
                        <FontAwesomeIcon icon={faBorderAll} className="navBarIcon" />
                    </Nav.Link>
                </Nav>
                <Form inline className="navBarCenter mx-auto">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="navBarIcon" />
                    <FormControl type="text" placeholder="Search..." className="navBarSearch ml-2" />
                </Form>
                <Nav className="ml-auto navBarRight">
                    <Nav.Link as={Link} to="#">
                        <FontAwesomeIcon icon={faUser} className="navBarIcon" /><span className="ml-2">Sign In</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to="#">
                        <FontAwesomeIcon icon={faUser} className="navBarIcon" /><span className="ml-2">Sign Up</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to="#">
                        <FontAwesomeIcon icon={faEnvelope} className="navBarIcon" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="#">
                        <Image src={currentUser.profilePicture} roundedCircle className="user" width="30" height="30" alt="Profile" />
                        <span className="ml-2">{currentUser.name}</span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar; 