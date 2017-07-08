import React from 'react'
import BackButton from './BackButton'

const SourcesIndex = ({saveSources, sourcesList}) =>
  <div className="sources-container">
    <div className="sources">
      <h2>Select sources for your newsfeed:</h2>
      <button className="save-button" onClick={saveSources}>Save</button>
      <BackButton />
    </div>
    <div id="sources-form" >
      {sourcesList}
    </div>
  </div>

  export default SourcesIndex
