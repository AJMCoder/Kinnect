import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCommentDots, faShare, faHeart} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePicture} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} className="name">
                        <span>{post.name}</span>
                        </Link>
                        <span className="postTime"> 30 seconds ago.</span>
                    </div>
                </div>
                <div className="more">
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
            <div className="content">
                <p>{post.description}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="interact"></div>
        </div>    
    </div>
  )
}

export default Post