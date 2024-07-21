import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  return (
    <div className="Login">
      <div className="card">
        <div className="left">
          <h1>Sign Up</h1>
          <p>Welcome! Log in to connect with friends, share your moments, and discover new stories. Enter your credentials below to join the conversation and explore a world of endless possibilities. Not a member yet? Sign up now to become part of our vibrant community!</p>
          <span>Don't have an account?</span>
          <Link to="/Registration">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Email or Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>  
      </div>
    </div>
  )
}

export default Login