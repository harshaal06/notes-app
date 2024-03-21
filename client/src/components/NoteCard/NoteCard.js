import React from 'react'
import './NoteCard.css'

function NoteCard({_id, title, content, category}) {
  return (
    <div class="card m-4 shadow border border-dark-subtle">
        <h4 class="card-header border-bottom border-dark-subtle">
            {title}
        </h4>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p>{content}</p>
            <footer class="blockquote-footer"><cite>{category}</cite></footer>
            </blockquote>
        </div>
    </div>
  )
}

export default NoteCard