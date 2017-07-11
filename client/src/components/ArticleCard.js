import React from 'react'
import {Link} from 'react-router-dom'

function setArticleUrl(title) {
  var sanitizedTitle = title.replace(/%/g, "[percent]")
  debugger
  return encodeURIComponent(sanitizedTitle)
}

const ArticleCard = ({channel, article}) => {
  return (
    <Link to={`/newsfeed/${channel.source_id}/${setArticleUrl(article.title)}`} className="article-link">
      <div className="card">
        <h3>{article.title}</h3>
        <img src={article.urlToImage} className="image" alt=""/>
      </div>
    </Link>
  )
}

export default ArticleCard
