import React from "react";

const Note = (props) => {
  function deleteHandler() {
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <button className="btn" onClick={deleteHandler}>
        <span className="deleteIcon">Delete</span>
      </button>
    </div>
  );
};

export default Note;
