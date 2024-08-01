import "./navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faBorderAll, faUser, faEnvelope, faBell, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
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
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="user"/>
                <span>John Smith</span>
            </div>
        </div>
    );
};

export default NavBar; 