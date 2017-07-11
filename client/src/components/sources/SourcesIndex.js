import React from 'react'
import BackButton from '../common/BackButton'

const SourcesIndex = ({saveSources, sourcesList}) =>
  <div className="sources-container">
    <div className="sources">
      <h2>Choose channels for your newsfeed (click to select):</h2>
      <button className="save-button" onClick={saveSources}>Save</button><br />
      <BackButton />
    </div>
    <div id="sources-form" >
      {sourcesList}
    </div>
  </div>

  export default SourcesIndex
