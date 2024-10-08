import "./comments.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
{/* Code adapted from Lama Dev social media guide */}

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

  //Temp
  const comments = [
    {
        id:1,
        userId: 1,
        name: "John Smith",
        description: "Nice post!",
        profilePicture: "https://images.pexels.com/photos/7848986/pexels-photo-7848986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        userId: 2,
        name: "John Smith",
        description: "Great post!",
        profilePicture: "https://images.pexels.com/photos/7848986/pexels-photo-7848986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        userId: 3,
        name: "John Smith",
        description: "Awesome post!",
        profilePicture: "https://images.pexels.com/photos/7848986/pexels-photo-7848986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];  

  return (
    <div className="comments">
        <div className="publish">
            <img src={currentUser.profilePicture} alt="" />
            <input type="text" placeholder="Write a comment..." />
            <button>Publish</button>
        </div>
        {comments.map(comment=>(
            <div className="comment" key={comment.id}>
                <img src={comment.profilePicture} alt="" />
                <div className="details">
                    <span>{comment.name}</span>
                    <p>{comment.description}</p>
                </div>
                <span className="commentTime">5 seconds ago</span>
            </div>
        ))}
    </div>
  );
};

export default Comments