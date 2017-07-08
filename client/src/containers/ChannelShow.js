import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom'

import ArticleCard from '../components/ArticleCard'
import ArticleShow from '../components/ArticleShow'
import BackButton from '../components/BackButton'
import '../styles/card.css'

class ChannelShow extends Component {
  constructor(props) {
    super();
    this.name = props.channel.name
  }




  render() {
    var channelArticles = this.props.articles.find(articleObject => articleObject.name === this.props.channel.name);

    if (!!channelArticles) {
      channelArticles = channelArticles.articles.map((article, index) => (
          <ArticleCard article={article} channel={this.props.channel} key={index} />
      ))

    }

    const ArticleWithProps = (props) => {
      return (
        <ArticleShow
          channelName={this.name}
          {...props}
        />
      );
  }


  return (
    <Switch>
      <Route exact path={this.props.match.url} render = {() =>
        <div>
          <h1>{this.name}</h1>
          <BackButton />
          {channelArticles}
        </div>}/>
      <Route path={`${this.props.match.url}/:article`} render={ArticleWithProps} />
    </Switch>
   )}
}


const mapStateToProps = (state, ownProps) => {
  const channel = state.sources.find(source => source.source_id == ownProps.match.params.ChannelId)
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
