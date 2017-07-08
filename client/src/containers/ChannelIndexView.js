
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card'
import {connect} from 'react-redux';


class ChannelIndexView extends Component {
  constructor(props) {
    super();
    this.name = props.channel.name
  }




  setArticleLink(title) {
    return encodeURIComponent(title)
  }

  render() {
    const channelArticles = this.props.articles.find(articleObject => articleObject.name === this.name);

    const articles = channelArticles.articles.map((article, index) => {
      return (
        <Link to={`/newsfeed/${this.props.channel.source_id}/${this.setArticleLink(article.title)}`}><h4 className="article-title">{article.title}</h4></Link>
      )
    })

    const title = (
      <Link to={`/newsfeed/${this.props.channel.source_id}`}>{this.name}</Link>
    )


    return (
      <Card title={title} content={articles}/>
    )
  }
}




const mapStateToProps = (state) => {
  return {articles: state.articles}
}

export default connect(mapStateToProps)(ChannelIndexView)
