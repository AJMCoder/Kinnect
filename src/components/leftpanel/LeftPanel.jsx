import "./leftPanel.css";
import Friends from "../../assets/friends.png";
import Communities from "../../assets/communities.png";
import Messages from "../../assets/messages.png";
import Videos from "../../assets/videos.png";

const LeftPanel = () => {
    return (
        <div className="LeftPanel">
            <div className="container">
                <div className="sidebar">
                    <div className="user">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="user"/>
                    <span>John Smith</span>
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