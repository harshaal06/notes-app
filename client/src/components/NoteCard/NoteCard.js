import React from 'react'
import './NoteCard.css'
import DeleteIcon from "./delete-icon.png";
import axios from 'axios';
import toast from 'react-hot-toast';

function NoteCard({_id, title, content, category, loadNotes}) {

  const deleteNote = async () => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/notes/${_id}`)
    toast.success(response.data.message)
    loadNotes()
  }

  return (
    <div class="card my-4 shadow border border-dark-subtle position-relative">
        <h4 class="card-header border-bottom border-dark-subtle">
            {title}
        </h4>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p>{content}</p>
            </blockquote>
            <i className='text-bg-secondary position-absolute category text-center rounded'>{category}</i>
            <img src={DeleteIcon} 
              className='bg-primary-subtle position-absolute delete-icon shadow-sm border border-dark-subtle p-2 rounded-circle'
              alt='delete-icon'
              onClick={deleteNote}
              />
        </div>
    </div>
  )
}

export default NoteCard