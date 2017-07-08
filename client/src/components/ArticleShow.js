import React from 'react'
import {connect} from 'react-redux';


const Article = ({article, channelName, handleClick}) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p onClick={handleClick}> &lt; &lt; Back</p>
      <img src={article.urlToImage} className="image"/>
      <h5>Posted at: {article.publishedAt}</h5>
      <p>{article.description}</p>
      <a href={article.url} target="_blank">Read full article on {channelName}</a>
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
