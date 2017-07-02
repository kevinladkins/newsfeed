import React from 'react'
import {Link} from 'react-router-dom'

function setArticleLink(title) {
  return encodeURIComponent(title)
}

const ArticleCard = ({channel, article}) => {
  return (
    <Link to={`/newsfeed/${channel.source_id}/${setArticleLink(article.title)}`}>
    <div className="card">
      <h3>{article.title}</h3>
      <img src={article.urlToImage} className="image"/>
    </div>
    </Link>
  )
}

export default ArticleCard
