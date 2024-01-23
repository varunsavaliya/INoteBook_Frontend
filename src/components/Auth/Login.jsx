import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/auth/LoginContext.js";

export default function Login() {
  const URL = "http://localhost:5000/api";
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.data.token);
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  useEffect(() => {
    console.log(isLoggedIn);
    isLoggedIn && navigate("/");
  }, []);
  return (
    <>
      <div className="container my-3">
        <h4>Login to use iNotebook</h4>
        <form onSubmit={handleLogin}>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" aria-describedby="email" name="email" value={credentials.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} autoComplete="on" />
          </div>
          <div className="form-text my-3">
            Don't have account? <Link to="/signup"> Sign up here</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
