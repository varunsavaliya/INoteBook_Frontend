import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteContext from "../contexts/notes/NoteContext";

export default function AddNote() {
  const URL = "http://localhost:5000/api";
  const { editNote, addNote } = useContext(NoteContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    id ? editNote(id, note) : addNote(note);
    navigate("/");
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/note/getnotebyid/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTM3MzI5ZTU1MmE2Mzg2ZjIzYTQ3OSIsImlhdCI6MTcwNTIxMDY2NX0.-YurjyGqtNV6CZVVvLh9n0-Direv_n9C5ycum1rfhSU", // Replace with your actual token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      const note = {
        title: data.data.title,
        description: data.data.description,
        tag: data.data.tag,
      };
      setNote(note);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <div className="d-flex my-3 justify-content-start align-items-center">
        <i role="button" class="fa-solid fa-left-long me-3" onClick={handleBackClick}></i>
        <h3 className="my-3">{id ? "Edit Note" : "Add Note"}</h3>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="title" value={note.title} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" name="description" aria-describedby="description" value={note.description} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input type="text" className="form-control" id="tag" name="tag" aria-describedby="tag" value={note.tag} onChange={onChange} />
        </div>
        <button className="btn btn-primary" onClick={onSubmit}>
          {id ? "Edit Note" : "Add Note"}
        </button>
      </form>
    </>
  );
}
