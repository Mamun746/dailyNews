import React from 'react'
import {Link} from 'react-router-dom'

function renderOtherNews(otherNews){
    if(otherNews){
        return otherNews.map((news)=>{
            return (
                <Link to={`/news/${news.id}`} key={news.id} className="item">
                <div className='left' style={{background:`url(/images/articles/${news.img})`}}>
                </div>
                <div className='right'>
                <h3>{news.title}</h3>
                <div className="category-tag">{news.category}</div>
                <div className="tags">
                <span>
                <i className="fa fa-eye"></i>
                {news.views}
                </span>
                <span>
                <i className="fa fa-thumbs-up"></i>
                {news.likes[0]}
                </span>
                </div>
                
                </div>
                </Link>

            )
        })
    }
}

function OtherNews({otherNews}) {
    return (
        <div className='other-news'>
        <h1>Other News</h1>
        <div className='other-news-item'>
        {renderOtherNews(otherNews)}
        </div>
           
        </div>
    )
}

export default OtherNews
