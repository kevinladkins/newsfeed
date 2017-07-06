import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../components/Home'
import Signup from './Signup'
import Newsfeed from './Newsfeed'
import Sources from './Sources'


export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sources' component={Sources} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/newsfeed' component={Newsfeed} />
      </Switch>
    )
  }
}
