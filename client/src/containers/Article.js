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


function mapStateToProps(state, ownProps) {
  var articles = []
    if (state.articles.find(channel => channel.name === ownProps.channelName)) {
      articles = state.articles.find(channel => channel.name === ownProps.channelName).articles;
    }
  const article = articles.find(article => article.title === ownProps.match.params.article)
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
