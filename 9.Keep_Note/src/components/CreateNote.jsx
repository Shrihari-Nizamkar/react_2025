import React from "react";
import { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  const insertNote = (e) => {
    e.preventDefault();
    props.passNote(note);
    // setNote({
    //   title: "",
    //   content: "",
    // });
  };

  return (
    <div className="main_note">
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={inputHandler}
        />
        <textarea
          placeholder="Write a note...."
          name="content"
          value={note.content}
          onChange={inputHandler}
        ></textarea>
        <br />
        <button className="add-button" onClick={insertNote}>
          <span className="plus_sign">+</span>
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
