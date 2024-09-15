import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./registration.css"
import { Alert } from "react-bootstrap";
//import { set } from "msw/lib/types/context";
//{/* Code adapted from Lama Dev social media guide */}

const Registration = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { username, email, password1, password2 } = signUpData;

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(''); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password1) newErrors.password1 = "Password is required";
    if (password1 !== password2) newErrors.password2 = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    try {
      await axios.post("http://kinnect-api-cf0f665319fa.herokuapp.com/dj-rest-auth/registration/", signUpData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess("Registration successful. Redirecting to login page...");
      setTimeout(() => {
        navigate("/login");
      }, 3000); // Redirect to login page after 3 seconds
    } catch (err) {
      setError(err.response?.data || {});
    }
  };

  return (
    <div className="Registration">
      <div className="card">
        <div className="left">
          <h1>Login</h1>
          <p>
            Welcome! Log in to connect with friends, share your moments, and
            discover new stories. Enter your credentials below to join the
            conversation and explore a world of endless possibilities. Not a
            member yet? Sign up now to become part of our vibrant community!
          </p>
          <span>Have an account already?</span>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Sign Up</h1>
          {success && <Alert variant="success">{success}</Alert>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
            {error.username && <Alert variant="danger">{error.username}</Alert>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            {error.email && <Alert variant="danger">{error.email}</Alert>}
            <input
              type="password"
              name="password1"
              placeholder="Password"
              value={password1}
              onChange={handleChange}
            />
            {error.password1 && <Alert variant="danger">{error.password1}</Alert>}
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={handleChange}
            />
            {error.password2 && <Alert variant="danger">{error.password2}</Alert>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;