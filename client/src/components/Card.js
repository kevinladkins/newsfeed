import React from 'react'
import '../styles/card.css'

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      {props.content}
    </div>
  )

}

export default Card
