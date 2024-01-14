import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "65a42e04d6b8f7159e9647f1",
      title: "Test note",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:00.474Z",
      updatedAt: "2024-01-14T18:55:00.474Z",
      __v: 0,
    },
    {
      _id: "65a42e09d6b8f7159e9647f3",
      title: "Test note 2",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:05.422Z",
      updatedAt: "2024-01-14T18:55:05.422Z",
      __v: 0,
    },
    {
      _id: "65a42e04d6b8f7159e9647f1",
      title: "Test note",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:00.474Z",
      updatedAt: "2024-01-14T18:55:00.474Z",
      __v: 0,
    },
    {
      _id: "65a42e09d6b8f7159e9647f3",
      title: "Test note 2",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:05.422Z",
      updatedAt: "2024-01-14T18:55:05.422Z",
      __v: 0,
    },
    {
      _id: "65a42e04d6b8f7159e9647f1",
      title: "Test note",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:00.474Z",
      updatedAt: "2024-01-14T18:55:00.474Z",
      __v: 0,
    },
    {
      _id: "65a42e09d6b8f7159e9647f3",
      title: "Test note 2",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:05.422Z",
      updatedAt: "2024-01-14T18:55:05.422Z",
      __v: 0,
    },
    {
      _id: "65a42e04d6b8f7159e9647f1",
      title: "Test note",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:00.474Z",
      updatedAt: "2024-01-14T18:55:00.474Z",
      __v: 0,
    },
    {
      _id: "65a42e09d6b8f7159e9647f3",
      title: "Test note 2",
      description: "test test note test note pd note test note",
      tag: "test",
      createdAt: "2024-01-14T18:55:05.422Z",
      updatedAt: "2024-01-14T18:55:05.422Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);
  return <NoteContext.Provider value={{ notes, setNotes }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
