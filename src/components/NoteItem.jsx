import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../contexts/notes/NoteContext";

export default function NoteItem({ note }) {
  const { deleteNote } = useContext(NoteContext);
  const navigate = useNavigate();

  const handleEditNote = () => {
    navigate(`/edit-note/${note._id}`);
  };
  return (
    <>
      <div className="col col-md-3 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-primary" onClick={handleEditNote}>
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteNote(note._id);
                }}
              >
                <i className="fa-solid fa-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
