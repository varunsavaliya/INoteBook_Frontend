import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../contexts/auth/LoginContext.js";
import Notes from "./Notes";

export default function Home() {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, []);
  return (
    <>
      <div className="container my-3">
        <Notes />
      </div>
    </>
  );
}
