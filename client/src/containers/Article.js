import React from 'react'
import {connect} from 'react-redux';


const Article = (props) => {
  console.log(props.article)
  return (
    <h1>Hiya</h1>
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
