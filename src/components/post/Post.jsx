import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCommentDots, faShare, faHeart} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className="post">
        <div className="user">
            <div className="userInfo">
                <img src={post.img} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} className="link">
                    <span>{post.name}</span>
                    </Link>
                </div>
            </div>
            <div className="more">
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
        <div className="content"></div>
        <div className="interact"></div>
    </div>
  )
}

export default Post