import React from 'react'
import ArticleCard from './ArticleCard'
import BackButton from './BackButton'

const ArticlesIndex = ({articles, channel}) => {
    const articleList = articles.map((article, index) => {
      return <ArticleCard article={article} channel={channel} key={index} />
    })
    
    return (
      <div>
        <h1>{channel.name}</h1>
        <BackButton />
        {articleList}
      </div>
    )
}

export default ArticlesIndex
