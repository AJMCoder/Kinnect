import "./rightPanel.css";
{/* Code adapted from Lama Dev social media guide */}

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
                <div className="sidebar">
                    <span>Recent Activity</span>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <p>
                                <span>John Smith</span> posted a status update.
                            </p>
                        </div>
                        <span>5 minutes ago</span>
                    </div>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <p>
                                <span>John Smith</span> liked a comment.
                            </p>
                        </div>
                        <span>5 minutes ago</span>
                    </div>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <p>
                                <span>John Smith</span> liked a picture.
                            </p>
                        </div>
                        <span>5 minutes ago</span>
                    </div>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <p>
                                <span>John Smith</span> posted a video.
                            </p>
                        </div>
                        <span>5 minutes ago</span>
                    </div>
                </div>
                <div className="sidebar">
                    <span>Friends Online</span>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <div className="online" />
                            <span>John Smith</span>
                        </div>    
                    </div>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <div className="online" />
                            <span>John Smith</span>
                        </div>    
                    </div>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <div className="online" />
                            <span>John Smith</span>
                        </div>    
                    </div>
                    <div className="user">
                        <div className="userDetails">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            <div className="online" />
                            <span>John Smith</span>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightPanel;