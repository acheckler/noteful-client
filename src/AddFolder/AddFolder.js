import React, { Component } from "react";
import ApiContext from '../ApiContext'



class AddFolder extends Component {
    static contextType = ApiContext
    handleSubmit(event) {
    event.preventDefault();
    const folderName = event.target.name.value
    this.context.addFolder(folderName)
    this.props.history.push(`/`)
    // process form values here
  }


  render() {
      console.log(this.props)
    return (
      <form className="AddFolder" onSubmit={e => this.handleSubmit(e)}>
        <h2>Create A Folder</h2>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="form_creation_control"
            name="name"
            id="name"
          />
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
 export default AddFolder