import React from 'react'
import BackButton from './BackButton'


const ArticleShow = ({channel, channelArticles, match}) => {
  const matchParams = decodeURIComponent(match.params.article)
  const article = channelArticles.articles.find(article => article.title === matchParams)
  
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


export default ArticleShow
