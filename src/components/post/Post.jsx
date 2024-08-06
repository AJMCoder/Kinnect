import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faCommentDots, faShare, faHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Post = ({post}) => {

    //Temp
  const liked = false;

  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePicture} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} className="name" style={{textDecoration: "none"}}>
                        <span>{post.name}</span>
                        </Link>
                        <span className="postTime"> 30 seconds ago.</span>
                    </div>
                </div>
                <div className="more">
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>
            <div className="content">
                <p>{post.description}</p>
                <img src={post.img} alt="" />
            </div>
            <div className="interact">
                <div className="actions">
                    {liked ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartRegular} />}
                    Like
                </div>
                <div className="actions">
                    <FontAwesomeIcon icon={faCommentDots} />
                    Comment
                </div>
                <div className="actions">
                    <FontAwesomeIcon icon={faShare} />
                    Share
                </div>        
            </div>
        </div>    
    </div>
  )
}

export default Post