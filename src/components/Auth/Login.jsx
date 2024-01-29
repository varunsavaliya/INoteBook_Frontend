import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../contexts/auth/LoginContext.js";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { tryLogin } = useContext(LoginContext);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    tryLogin(credentials);
  };

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);
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
