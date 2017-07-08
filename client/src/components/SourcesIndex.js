import React from 'react'

const SourcesIndex = ({saveSources, sourcesList}) =>
  <div className="sources-container">
    <div className="sources">
      <h2>Select sources for your newsfeed:</h2>
      <button className="save-button" onClick={saveSources}>Save</button>
    </div>
    <div id="sources-form" >
      {sourcesList}
    </div>
  </div>

  export default SourcesIndex
