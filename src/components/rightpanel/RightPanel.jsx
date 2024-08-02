import "./rightPanel.css";

const RightPanel = () => {
    return (
        <div className="RightPanel">
            <div className="container">
                <div className="sidebar">
                    <span>Recommended</span>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <span>John Smith</span>
                        </div>
                        <div className="buttons">
                            <button>Add</button>
                            <button>Ignore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightPanel;