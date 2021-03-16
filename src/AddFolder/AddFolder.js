import React, { Component } from "react";
import ApiContext from '../ApiContext'
import PropTypes from 'prop-types'



class AddFolder extends Component {
    static contextType = ApiContext
    static propTypes = {
      history: PropTypes.object
    }
    handleSubmit(event) {
    event.preventDefault();
    const folderName = event.target.name.value
    this.context.addFolder(folderName)
    this.props.history.push(`/`)
    // process form values here
  }


  render() {
    return (
      <form className="AddFolder" onSubmit={e => this.handleSubmit(e)}>
        <h2>Create A Folder</h2>
        <div className="folderForm">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="folderName"
            name="name"
            id="name"
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
 export default AddFolder