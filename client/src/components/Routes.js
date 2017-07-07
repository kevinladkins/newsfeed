import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Signup from '../containers/Signup'
import Newsfeed from '../containers/Newsfeed'
import Sources from '../containers/Sources'


const Routes = () =>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sources' component={Sources} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/newsfeed' component={Newsfeed} />
      </Switch>


export default Routes
