
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as channelsActions from '../actions/channelsActions'

class ChannelCard extends Component {
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




  render() {
    const articles = this.state.articles.map((article, index) => {
      return (<h4 className="article-title">{article.title}</h4>)
    })

    const title = (
      <Link to={`/newsfeed/${this.props.channel.source_id}`}>{this.name}</Link>
    )


    return (
      <Card title={title} content={articles}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(channelsActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {articles: state.articles}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCard)
