import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes";

export default function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
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
