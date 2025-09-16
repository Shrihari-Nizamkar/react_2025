import { useState } from "react";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevNote) => {
      return [...prevNote, note]; //Create a new array by copying everything from prevNote
    });
  }

  function deleteNote(id) {
    setNoteList((oldNote) => {
      return oldNote.filter((obj, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {noteList.map((note, index) => {
        return (
          <Note
            title={note.title}
            content={note.content}
            id={index}
            key={index}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
