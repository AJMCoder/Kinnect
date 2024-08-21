import "./navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faBorderAll, faUser, faEnvelope, faBell, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
{/* Code adapted from Lama Dev social media guide */}

const NavBar = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className="navBar">
            <div className="navBarLeft">
                <FontAwesomeIcon icon={faHouse} className="navBarIcon"/>
                <FontAwesomeIcon icon={faMoon} className="navBarIcon"/>
                <FontAwesomeIcon icon={faBorderAll} className="navBarIcon"/>
            </div>
                <Link to="/">
                    <span className="sitename">Kinnect</span>
                </Link>
            <div className="navBarCenter">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="navBarIcon"/>
                    <input type="text" placeholder="Search..." className="navBarSearch"/>
            </div>
            <div className="navBarRight">
                <FontAwesomeIcon icon={faUser} className="navBarIcon"/>
                <FontAwesomeIcon icon={faEnvelope} className="navBarIcon"/>
                <FontAwesomeIcon icon={faBell} className="navBarIcon"/>
                <img src={currentUser.profilePicture} alt="" className="user"/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    );
};

export default NavBar; 