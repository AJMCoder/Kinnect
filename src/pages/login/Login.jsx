import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import { useContext, useState } from "react"
import axios from "axios"
import "./login.css"

//{/* Code adapted from Lama Dev social media guide */}

const Login = () => {
    const { login } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent form submission
      try {
        console.log("Sending data:", credentials); // Log the request payload
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/dj-rest-auth/login/`, credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Server response:", response); // Log the server response
        login(response.data); // Assuming login function in AuthContext handles storing the token
        navigate("/"); // Redirect to home page after successful login
      } catch (err) {
        console.error("Error during login:", err);
        setError("Invalid credentials. Please try again.");
      }
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
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="username"
                placeholder="Email or Username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;