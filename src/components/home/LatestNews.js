import React from 'react'
import {Link} from 'react-router-dom'


function LatestNews({latest}) {
   
    return (  
        
        <div className="home_latest">
           {
               latest.loading?(<h1>Loading</h1>):latest.error?(<h1>{latest.error}</h1>):
               (
                <div>
                {
                    latest.articles.map((news)=>{
                        return(
                            <Link to={`/news/${news.id}`} key={news.id} className='item'>
                            <div className='image_cover' style={{background:`url(/images/articles/${news.img})`}}>
                            <div className='description'>
                            <span>{news.category}</span>
                            <div>
                            {news.title}
                            </div>
                            
                            </div>
                            
                            </div>
                            </Link>
                        )
                        
                     })
                }
                    
                
                </div>
               )
               
           }
        </div>
    )
}

export default LatestNews
