import React from 'react'
import {Link} from 'react-router-dom'



const ArticleCard = ({channel, article, setArticleUrl}) => {
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
