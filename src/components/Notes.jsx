import { useContext } from "react";
import NoteContext from "../contexts/notes/NoteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const { notes, setNotes } = useContext(NoteContext);

  return (
    <>
      <h3>Your Notes</h3>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} key={note.id} />;
        })}
      </div>
    </>
  );
}
