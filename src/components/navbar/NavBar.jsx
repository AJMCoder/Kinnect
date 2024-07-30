import "./navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon, faBorderAll, faUser, faEnvelope, faBell} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBarLeft">
                <FontAwesomeIcon icon={faHouse} className="navBarIcon"/>
                <FontAwesomeIcon icon={faMoon} className="navBarIcon"/>
                <FontAwesomeIcon icon={faBorderAll} className="navBarIcon"/>
            </div>
            <div className="navBarCenter">
                <input type="text" placeholder="Search for friends, posts or videos" className="navBarSearch"/>
            </div>
            <div className="navBarRight">
                <FontAwesomeIcon icon={faUser} className="navBarIcon"/>
                <FontAwesomeIcon icon={faEnvelope} className="navBarIcon"/>
                <FontAwesomeIcon icon={faBell} className="navBarIcon"/>
                <img src="/assets/person/1.jpeg" alt="" className="navBarImg"/>
            </div>
        </div>
    );
};

export default NavBar;