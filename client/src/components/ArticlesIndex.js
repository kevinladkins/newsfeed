import React from 'react'
import ArticleCard from './ArticleCard'
import BackButton from './BackButton'

const ArticlesIndex = ({channelArticles, channel}) => {
   debugger
    const articles = channelArticles.articles.map((article, index) => {
      return <ArticleCard article={article} channel={channel} key={index} />
    })
    return (
      <div>
        <h1>{channel.name}</h1>
        <BackButton />
        {articles}
      </div>
    )
}

export default ArticlesIndex
