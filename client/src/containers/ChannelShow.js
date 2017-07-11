import React from 'react'
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom'

import ArticleShow from '../components/ArticleShow'
import ArticlesIndex from '../components/ArticlesIndex'




const ChannelShow = ({match, articles, channel}) => {

  const setArticleUrl = (title) => {
    var sanitizedTitle = title.replace(/%/g, "[percent]")
    return encodeURIComponent(sanitizedTitle)
  }

  const decodeArticleUrl = (title) => {
    const sanitizedTitle = decodeURIComponent(title)
    return sanitizedTitle.split("[percent]").join("%")
  }

  var channelArticles = articles.find(articleObject => articleObject.name === channel.name).articles;

  const ArticlesIndexWithProps = (props) => {
     return (
       <ArticlesIndex
         articles ={channelArticles}
         channel={channel}
         setArticleUrl={setArticleUrl}
         {...props}
      />);
   }

  const ArticleWithProps = (props) => {
    return (
      <ArticleShow
        articles={channelArticles}
        channel={channel}
        decodeArticleUrl={decodeArticleUrl}
        {...props}
      />);
  }
  return (
    <Switch>
      <Route exact path={match.url} render={ArticlesIndexWithProps} />
      <Route path={`${match.url}/:article`} render={ArticleWithProps} />
    </Switch>
  )
}


const mapStateToProps = (state, ownProps) => {
  const channel = state.sources.find(source => source.source_id === ownProps.match.params.ChannelId)
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

export default connect(mapStateToProps)(ChannelShow)
