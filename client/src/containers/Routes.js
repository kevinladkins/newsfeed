import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../components/Home'
import Newsfeed from './Newsfeed'
import Sources from './Sources'


export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sources' component={Sources} />
        <Route path='/newsfeed' component={Newsfeed} />
      </Switch>
    )
  }
}
