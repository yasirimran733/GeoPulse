import React, { useEffect, useState } from 'react'
import { getNews } from '../api/NewsApi.js'

function News() {
    const [news,setNews] = useState([])
    const [country,setCountry] = useState("gb")
    useEffect(()=>{
    async function getNewsData(params) {
        const {status , totalResults , articles } = await getNews(country)
        console.log("Local News :",articles)
        setNews(articles)
    }
    getNewsData()
    },[])
  return (
    <div>
      <h1>Today News</h1>
      {news.map((article,index)=>{
        return (
        <div key={index}>
        <li> 
            {article.author}-{article.title}-{article.description}
        </li>
        <img src={article.
urlToImage} />
        </div>
    )})}
    </div>
  )
}

export default News
