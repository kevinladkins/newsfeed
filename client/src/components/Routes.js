import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Signup from '../containers/Signup'
import Sources from '../containers/Sources'
import Newsfeed from '../containers/Newsfeed'




const Routes = () =>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sources' component={Sources} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/newsfeed' component={Newsfeed} />
      </Switch>


export default Routes
