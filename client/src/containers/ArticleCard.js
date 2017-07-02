import React from 'react'
import {Link} from 'react-router-dom'

function setArticleLink(title) {
  return encodeURIComponent(title)
}

const ArticleCard = ({channel, article}) => {
  return (
    <div className="card">
      <Link to={`/newsfeed/${channel.source_id}/${setArticleLink(article.title)}`}>
        <h3>{article.title}</h3>
        <img src={article.urlToImage} className="image"/>
      </Link>
    </div>
  )
}

export default ArticleCard
