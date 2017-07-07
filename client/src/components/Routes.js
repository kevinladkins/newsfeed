import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Signup from '../containers/Signup'
import Newsfeed from '../containers/Newsfeed'
import Sources from '../containers/Sources'
import Channels from '../containers/Channels'



const Routes = () =>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sources' component={Sources} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/newsfeed' component={Channels} />
      </Switch>


export default Routes
