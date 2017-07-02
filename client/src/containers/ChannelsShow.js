import React, {Component} from 'react'
import Card from '../components/Card'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as channelsActions from '../actions/channelsActions'

class ChannelsShow extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: []
    }
    this.setArticles = this.setArticles.bind(this)
  }

  componentWillMount() {
    this.setArticles()
  }

  componentDidMount() {
    this.interval = setInterval(this.setArticles, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setArticles() {
    this.setState({
      articles: this.props.actions.getArticles(this.props.channel)
    })
  }



  render() {
    return (
      <Card title={this.props.channel.name} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(channelsActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ChannelsShow)
