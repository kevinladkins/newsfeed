import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Sources from './Sources'


export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sources' component={Sources} />
      </Switch>
    )
  }
}
