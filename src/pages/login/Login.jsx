import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"
import "./login.css"
//{/* Code adapted from Lama Dev social media guide */}
const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
      e.preventDefault(); // Prevent form submission
      login();
  };

  return (
      <div className="Login">
          <div className="card">
              <div className="left">
                  <h1>Sign Up</h1>
                  <p>
                      Welcome! Log in to connect with friends, share your moments, and discover new stories.
                      Enter your credentials below to join the conversation and explore a world of endless possibilities.
                      Not a member yet? Sign up now to become part of our vibrant community!
                  </p>
                  <span>Don't have an account?</span>
                  <Link to="/Registration">
                      <button>Sign Up</button>
                  </Link>
              </div>
              <div className="right">
                  <h1>Login</h1>
                  <form onSubmit={handleLogin}>
                      <input type="text" placeholder="Email or Username" required />
                      <input type="password" placeholder="Password" required />
                      <button type="submit">Login</button>
                  </form>
              </div>  
          </div>
      </div>
  );
};

export default Login