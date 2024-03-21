import React from 'react'
import './NoteCard.css'

function NoteCard({_id, title, content, category}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <span>{category}</span>
    </div>
  )
}

export default NoteCard