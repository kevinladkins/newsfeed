import React from 'react'
import '../styles/card.css'

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="card-content">{props.content}</div>
    </div>
  )

}

export default Card
