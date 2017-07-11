
import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../common/Card'





const ChannelCard = ({channel, articles, setArticleUrl}) => {
    //finds articles associated with this channel
    const articleObject = articles.find(articleObject => articleObject.name === channel.name);

    //maps article titles to links
    const channelArticles = articleObject.articles.map((article, index) => {
      return (
        <Link to={`/newsfeed/${channel.source_id}/${setArticleUrl(article.title)}`}><h4 className="article-title">{article.title}</h4></Link>
      )
    })

    const title = (
      <Link to={`/newsfeed/${channel.source_id}`}>{channel.name}</Link>
    )

    return (
      <Card title={title} content={channelArticles} key={channel.source_id}/>
    )
  }


export default ChannelCard
