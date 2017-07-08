import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Switch, Route} from 'react-router-dom'

import ArticleCard from '../components/ArticleCard'
import ArticleShow from '../components/ArticleShow'
import '../styles/card.css'
import Card from '../components/Card'
import * as channelsActions from '../actions/channelsActions'

class ChannelShow extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.name = props.channel.name
  }


  handleClick() {
    this.props.history.goBack()
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
          handleClick={this.handleClick}
          {...props}
        />
      );
  }


  return (
    <Switch>
      <Route exact path={this.props.match.url} render = {() =>
        <div>
          <h1>{this.name}</h1>
          <p onClick={this.handleClick}> &lt; &lt; Back</p>
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
