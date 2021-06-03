import React, { Component } from "react";
import ApiContext from "../ApiContext";
import PropTypes from "prop-types";
import config from "../config";

class AddFolder extends Component {
  static contextType = ApiContext;
  static propTypes = {
    history: PropTypes.object,
  };

  handleSubmit(event) {
    event.preventDefault();
    const folderName = event.target.name.value;
    this.handleAddFolder(folderName);
  }

  handleAddFolder = (folderName) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folder_name: folderName }),
    };

    fetch(`${config.API_ENDPOINT}/folders/`, options)
      .then((folderRes) => {
        if (!folderRes.ok) {
          throw new Error("error");
        }

        return folderRes.json();
      })
      .then((folderRes) => {
        const folderId = folderRes.id;
        this.props.history.push(`/folder/${folderId}`);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <form className="AddFolder" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Create A Folder</h2>
        <div className="folderForm">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="folderName"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="create-folder-button">
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}
export default AddFolder;
