import "./leftPanel.css";

const LeftPanel = () => {
    return (
        <div className="LeftPanel">
            <div className="container">
                <div className="sidebar">
                    <div className="user">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="user"/>
                    <span>John Smith</span>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>Home</li>
                            <li>Timeline</li>
                            <li>Friends</li>
                            <li>Messages</li>
                        </ul>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;