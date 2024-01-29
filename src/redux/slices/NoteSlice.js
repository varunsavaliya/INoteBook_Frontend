import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setAllNotes: (note, action) => {
      const notes = action.payload;
      note.notes = notes;
    },
  },
});

export const { setAllNotes } = NoteSlice.actions;
export default NoteSlice.reducer;
