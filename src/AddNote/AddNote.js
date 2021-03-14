import React, { Component } from "react";
import ApiContext from "../ApiContext";

class AddNote extends Component {
  static contextType = ApiContext;

  state = {
    folderId: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    const noteName = event.target.name.value;
    const noteContent = event.target.noteContent.value;
    console.log(noteContent);
    this.context.addNote(noteName, this.state.folderId, noteContent);
    this.props.history.push(`/`);
    // process form values here
  }

  selectFolder = (e) => {
    const folderId = e.target.value;
    this.setState({
      folderId,
    });
  };
  render() {
    const { folders = [], notes = [] } = this.context;
    return (
      <form className="AddNote" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Create A Note</h2>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="form_creation_control"
            name="name"
            id="name"
          />
          <label htmlFor="noteContent">Content:</label>
          <textarea
            rows="14"
            type="text"
            className="inputField"
            name="noteContent"
            id="content"
          />
          <select name="folder" onChange={(e) => this.selectFolder(e)}>
            <option value="">Choose Folder:</option>
            {folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
        </div>
        <div className="registration__button__group">
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}
export default AddNote;

//  import React from 'react'
// import Note from '../Note/Note'
// import './NotePageMain.css'
// import ApiContext from '../ApiContext'
// import { findNote } from '../notes-helpers'

// export default class NotePageMain extends React.Component {
//   static defaultProps = {
//     match: {
//       params: {}
//     }
//   }
//   static contextType = ApiContext

//   handleDeleteNote = noteId => {
//     this.props.history.push(`/`)
//   }

//   render() {
//     const { notes=[] } = this.context
//     const { noteId } = this.props.match.params
//     const note = findNote(notes, noteId) || { content: '' }
//     return (
//       <section className='NotePageMain'>
//         <Note
//           id={note.id}
//           name={note.name}
//           modified={note.modified}
//           onDeleteNote={this.handleDeleteNote}
//         />
//         <div className='NotePageMain__content'>
//           {note.content.split(/\n \r|\n/).map((para, i) =>
//             <p key={i}>{para}</p>
//           )}
//         </div>
//       </section>
//     )
//   }
// }
