import React from 'react'
import ArticleCard from './ArticleCard'
import BackButton from '../common/BackButton'

const ArticlesIndex = ({articles, channel, setArticleUrl}) => {

    const articleList = articles.map((article, index) => {
      return <ArticleCard article={article} channel={channel} setArticleUrl={setArticleUrl} key={index} />
    })

    return (
      <div className="body">
        <h1>{channel.name}</h1>
        <BackButton />
        {articleList}
      </div>
    )
}

export default ArticlesIndex
