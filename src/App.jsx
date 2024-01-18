import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddNote from "./components/AddNote";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./contexts/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/add-note" element={<AddNote />} />
              <Route exact path="/edit-note/:id" element={<AddNote />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
