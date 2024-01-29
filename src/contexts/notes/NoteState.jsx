import { bindActionCreators } from "@reduxjs/toolkit";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllNotes } from "../../redux/slices/NoteSlice.js";
import LoginContext from "../auth/LoginContext.js";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { getToken } = useContext(LoginContext);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ setAllNotes }, dispatch);

  const getAllNotes = async () => {
    const response = await fetch(`${URL}/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: getToken(),
      },
    });
    const json = await response.json();
    if (json.success) {
      actions.setAllNotes(json.data);
    }
  };

  const addNote = async (note) => {
    const response = await fetch(`${URL}/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: getToken(),
      },
      body: JSON.stringify({ title: note.title, description: note.description, tag: note.tag }),
    });
    await response.json().then((res) => {
      if (res.success) {
        // getAllNotes();
      }
    });
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${URL}/note/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: getToken(),
      },
    });
    await response.json().then((res) => {
      if (res.success) {
        getAllNotes();
      }
    });
  };

  const editNote = async (id, note) => {
    const response = await fetch(`${URL}/note/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: getToken(),
      },
      body: JSON.stringify({ title: note.title, description: note.description, tag: note.tag }),
    });
    await response.json().then((res) => {
      if (res.data) {
        // getAllNotes();
      }
    });
  };

  const getNoteById = async (id) => {
    try {
      const response = await fetch(`${URL}/note/getnotebyid/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: getToken(),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return;
    }
  };

  return <NoteContext.Provider value={{ addNote, deleteNote, getAllNotes, editNote, getNoteById }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
