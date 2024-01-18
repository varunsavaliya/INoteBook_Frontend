import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const URL = "http://localhost:5000/api";
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

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
    if (json.token) {
      localStorage.setItem("token", json.token);
      navigate("/");
    }
  };
  return (
    <>
      <div className="container my-3">
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" aria-describedby="email" name="email" value={credentials.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
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
