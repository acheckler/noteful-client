import React, { Component } from "react";
import ApiContext from "../ApiContext";
import PropTypes from 'prop-types'

class AddNote extends Component {
  static contextType = ApiContext;
  static propTypes = {
    history: PropTypes.object
  }

  state = {
    folderId: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    const noteName = event.target.name.value;
    const noteContent = event.target.noteContent.value;
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
    const { folders = []} = this.context;
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
          <label htmlFor="noteContent" className="noteContent">Content:</label>
          <textarea
            rows="14"
            type="text"
            className="inputField"
            name="noteContent"
            id="content"
          />
          <select name="folder" className="choose-folder" onChange={(e) => this.selectFolder(e)}>
            <option value="">Choose Folder:</option>
            {folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
        </div>
        <div className="create-note-button">
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}
export default AddNote;

