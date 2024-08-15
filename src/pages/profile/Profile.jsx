import "./profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit, faSquareXTwitter, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmerica, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import Ratings from "../../components/Rating/Ratings";

const Profile = () => {
    return (
        <div className="container mt-5">
            <div className="card" style={{ maxWidth: "540px", margin: "auto" }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="Profile" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">John Smith</h5>
                            <p className="card-text">Full time gamer, part-time Developer</p>
                            <p className="card-text"><small className="text-muted">@johnsmith</small></p>
                            <Ratings />
                            <a href="#" className="btn btn-primary">Follow</a>
                            <a href="#" className="btn btn-outline-primary">
                                    <FontAwesomeIcon icon={faMessage} className="me-2" />
                                    Message
                                </a>
                            <div className="social-media-links mt-3">
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                    <FontAwesomeIcon icon={faSquareXTwitter} size="2x" style={{ color: '#3b5998' }} />
                                </a>
                                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                    <FontAwesomeIcon icon={faReddit} size="2x" style={{ color: '#FF4500' }} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faSquareYoutube} size="2x" style={{ color: '#FF0000' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="mt-4">
                <h4>Posts</h4>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Post Title 1</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Posted 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Post Title 2</h5>
                        <p className="card-text">This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="card-text"><small className="text-muted">Posted 10 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile