import "./leftPanel.css";
import Friends from "../../assets/friends.png";
import Communities from "../../assets/communities.png";
import Messages from "../../assets/messages.png";
import Videos from "../../assets/videos.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftPanel = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className="LeftPanel">
            <div className="container">
                <div className="sidebar">
                    <div className="user">
                    <img src={currentUser.profilePicture} alt="" className="user"/>
                    <span>{currentUser.name}</span>
                    </div>
                    <div className="list">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="list">
                        <img src={Communities} alt="" />
                        <span>Communities</span>
                    </div>
                    <div className="list">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                    <div className="list">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;