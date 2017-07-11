import React from 'react'
import '../styles/Sources.css'

const SourceCard = ({source, clickDiv, setStyle}) => {
  return (
    <div className="source" onClick={clickDiv} style={setStyle()}>
      <h3>{source.name}</h3>
      <p>{source.description}</p>
    </div>
  )

}

export default SourceCard
