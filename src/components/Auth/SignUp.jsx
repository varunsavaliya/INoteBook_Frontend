import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const URL = "http://localhost:5000/api";
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
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
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="name" className="form-control" id="name" aria-describedby="name" name="name" value={credentials.name} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" aria-describedby="email" name="email" value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">
              You can use any email for testing, no verification required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
          </div>
          <div className="form-text my-3">
            Already have an account? <Link to="/login"> Login here</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
