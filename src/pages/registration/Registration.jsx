import { Link } from "react-router-dom";
import "./registration.css"

const Registration = () => {
  return (
    <div className="Registration">
      <div className="card">
        <div className="left">
          <h1>Login</h1>
          <p>Welcome! Log in to connect with friends, share your moments, and discover new stories. Enter your credentials below to join the conversation and explore a world of endless possibilities. Not a member yet? Sign up now to become part of our vibrant community!</p>
          <span>Have an account already?</span>
          <Link to="/Login">
          <button>Login</button>
            </Link>
        </div>
        <div className="right">
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </form>
        </div>  
      </div>
    </div>
  )
}

export default Registration;