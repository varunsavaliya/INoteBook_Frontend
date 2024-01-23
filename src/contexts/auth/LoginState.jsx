import { useState } from "react";
import NoteContext from "./LoginContext.js";

const LoginState = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  const getToken = () => {
    return localStorage.getItem("token");
  };
  return <NoteContext.Provider value={{ isLoggedIn, setIsLoggedIn, getToken }}>{props.children}</NoteContext.Provider>;
};

export default LoginState;
