import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const URL = "http://localhost:5000/api";
  const [notes, setNotes] = useState([]);

  const getAllNotes = async () => {
    const response = await fetch(`${URL}/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTM3MzI5ZTU1MmE2Mzg2ZjIzYTQ3OSIsImlhdCI6MTcwNTIxMDY2NX0.-YurjyGqtNV6CZVVvLh9n0-Direv_n9C5ycum1rfhSU",
      },
    });
    const json = await response.json();
    setNotes(json.data);
  };

  const addNote = async (note) => {
    const response = await fetch(`${URL}/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTM3MzI5ZTU1MmE2Mzg2ZjIzYTQ3OSIsImlhdCI6MTcwNTIxMDY2NX0.-YurjyGqtNV6CZVVvLh9n0-Direv_n9C5ycum1rfhSU",
      },
      body: JSON.stringify({ title: note.title, description: note.description, tag: note.tag }),
    });
    await response.json().then((res) => {
      if (res.data) {
        getAllNotes();
      }
    });
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${URL}/note/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTM3MzI5ZTU1MmE2Mzg2ZjIzYTQ3OSIsImlhdCI6MTcwNTIxMDY2NX0.-YurjyGqtNV6CZVVvLh9n0-Direv_n9C5ycum1rfhSU",
      },
    });
    await response.json().then((res) => {
      if (res.data) {
        getAllNotes();
      }
    });
  };

  const editNote = async (id, note) => {
    const response = await fetch(`${URL}/note/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTM3MzI5ZTU1MmE2Mzg2ZjIzYTQ3OSIsImlhdCI6MTcwNTIxMDY2NX0.-YurjyGqtNV6CZVVvLh9n0-Direv_n9C5ycum1rfhSU",
      },
      body: JSON.stringify({ title: note.title, description: note.description, tag: note.tag }),
    });
    await response.json().then((res) => {
      if (res.data) {
        getAllNotes();
      }
    });
  };

  return <NoteContext.Provider value={{ notes, addNote, deleteNote, getAllNotes, editNote }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
