import React from 'react'
import {Link} from 'react-router-dom'

const NewsfeedLanding = (props) =>
    <div>
      <h2 >
        Your Newsfeed is empty. Go to <Link className="link" to="/sources">Add Channels</Link> to select sources.
      </h2>
    </div>


export default NewsfeedLanding
