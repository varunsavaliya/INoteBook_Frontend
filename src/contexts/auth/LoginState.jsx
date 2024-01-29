import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { login, signUp } from "../../redux/slices/AuthSlice.js";
import NoteContext from "./LoginContext.js";

const LoginState = (props) => {
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const dispatch = useDispatch();
  const actions = bindActionCreators({ login, signUp }, dispatch);

  const getToken = () => {
    return localStorage.getItem("token");
  };
  const tryLogin = async (credentials) => {
    try {
      const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.data.token);
        actions.login({ token: json.data.token });
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const trySignUp = async (credentials) => {
    try {
      const response = await fetch(`${URL}/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.data.token);
        actions.signUp({ token: json.data.token });
      }
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };
  return <NoteContext.Provider value={{ trySignUp, getToken, tryLogin }}>{props.children}</NoteContext.Provider>;
};

export default LoginState;
