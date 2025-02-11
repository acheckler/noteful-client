import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import config from '../config'
import ApiContext from '../ApiContext'
import PropTypes from 'prop-types'

export default class Note extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    modified: PropTypes.string,
  }
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;
  
  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        this.context.deleteNote(noteId)
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .catch(error => {
        console.error({ error })
      })

  }

  render() {
    const { name, id, modified } = this.props
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'DD-MMM-YYYY')}
              
            </span>
          </div>
        </div>
      </div>
    )
  }
}
