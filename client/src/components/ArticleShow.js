import React from 'react'
import {connect} from 'react-redux';

import BackButton from './BackButton'


const Article = ({article, channelName}) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <BackButton />
      <img src={article.urlToImage} className="image-large"/>
      <h3>{article.description}</h3>
      <h3><a href={article.url} className="link" target="_blank">Read full article on {channelName}</a></h3>
    </div>
  )
}


function mapStateToProps(state, ownProps) {
  const matchParams = decodeURIComponent(ownProps.match.params.article)
  var articles = []
    if (state.articles.find(channel => channel.name === ownProps.channelName)) {
      articles = state.articles.find(channel => channel.name === ownProps.channelName).articles;
    }
  const article = articles.find(article => article.title === matchParams)
    if (article) {
      return {
          article: article
      }
    } else {
    return {
      article: {}
    }
  }
}

export default connect(mapStateToProps)(Article)
