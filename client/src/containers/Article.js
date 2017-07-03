import React from 'react'
import {connect} from 'react-redux';


const Article = ({article, channelName}) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} className="image"/>
      <h5>Posted at: {article.publishedAt}</h5>
      <p>{article.description}</p>
      <a href={article.url} target="_blank">Read full article on {channelName}</a>
    </div>
  )
}

//Fixes a glitch in the Match object (doesn't decode colons in the url)

function fixMatchParams(matchParams) {
  if (matchParams.split("%3A")) {
    return matchParams.split("%3A").join(":")
  } else {
    return matchParams
  }
}

function mapStateToProps(state, ownProps) {
  const matchParams = fixMatchParams(ownProps.match.params.article)
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
