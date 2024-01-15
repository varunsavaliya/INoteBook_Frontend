import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../contexts/notes/NoteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const { notes, getAllNotes } = useContext(NoteContext);

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3>Your Notes</h3>
        <Link className="btn btn-primary" to="/add-note">
          <i className="fa-solid fa-plus me-2"></i>Add Note
        </Link>
      </div>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
}
