import React from 'react'
import {connect} from 'react-redux';

import BackButton from './BackButton'


const ArticleShow = ({article, channel}) => {
  return (
    <div className="article">
      <h1>{article.title}</h1>
      <BackButton />
      <img src={article.urlToImage} className="image-large"/>
      <h3>{article.description}</h3>
      <h3><a href={article.url} className="link" target="_blank">Read full article on {channel.name}</a></h3>
    </div>
  )
}


function mapStateToProps(state, ownProps) {
  const matchParams = decodeURIComponent(ownProps.match.params.article)
  var articles = []
    if (state.articles.find(channel => channel.name === ownProps.channel.name)) {
      articles = state.articles.find(channel => channel.name === ownProps.channel.name).articles;
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

export default connect(mapStateToProps)(ArticleShow)
