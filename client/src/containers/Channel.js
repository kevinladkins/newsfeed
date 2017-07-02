import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'

import '../styles/card.css'
import Card from '../components/Card'
import * as channelsActions from '../actions/channelsActions'

class Channel extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: []
    }
    this.setArticles = this.setArticles.bind(this)
    this.name = props.channel.name
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
    this.props.actions.getArticles(this.props.channel).then(response => {
      this.setState({
        articles: response
      })
    })
  }

  setArticleLink(title) {
    return encodeURIComponent(title)
  }


  render() {
    const articles = this.state.articles.map((article, index) => (
        <div key={index} className="card">
          <Link to={`/newsfeed/${this.props.channel.source_id}/${this.setArticleLink(article.title)}`}><h3>{article.title}</h3></Link>
          <img src={article.urlToImage} className="image"/>
        </div>
    ))


    return (
      <div>
        <h1>{this.name}</h1>
        {articles}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(channelsActions, dispatch)
  }
}

const mapStateToProps = (state, ownProps) => {
  const channel = state.channels.find(channel => channel.source_id == ownProps.match.params.ChannelId)

  if (channel) {
    return {
        articles: state.articles,
        channel: channel
    }
  } else {
  return {
    articles: state.articles,
    channel: {}
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
