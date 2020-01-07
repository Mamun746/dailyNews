import React from 'react'
import { connect } from 'react-redux'
import { fetchSelectedNews, clearSelectedNews } from '../redux/actions'
import LikesCounter from './LikesCounter'

class News extends React.Component {

    componentDidMount() {
        this.props.selectedNews(this.props.match.params.id)

    }
    componentWillUnmount() {
        this.props.clearSelectedNews()
    }


    render() {
        const { selected } = this.props.articles
        return (
            <div className='news-container'>
                {
                    selected.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className='tags'>
                                    <span>
                                        <i className="fa fa-eye"></i>
                                        {item.views}
                                    </span>
                                    <span>
                                        <i className="fa fa-thumbs-up"></i>
                                        {item.likes[0]}
                                    </span>
                                    <span>
                                        <i className="fa fa-thumbs-down"></i>
                                        {item.likes[1]}
                                    </span>
                                </div>

                                <div className="top">
                                    <h2>{item.title}</h2>
                                    <span>Article By: <strong>{item.author}</strong></span>
                                </div>
                                <div>
                                    <img alt={item.author} src={`/images/articles/${item.img}`} />
                                </div>

                                <div className="body-news">
                                    {item.body}
                                </div>

                                <div>
                            <LikesCounter likes={item.likes[0] } dislike={item.likes[1]} articleId={item.id}/>
                                </div>



                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectedNews: (id) => {
            return dispatch(fetchSelectedNews(id))
        },
        clearSelectedNews: () => {
            return dispatch(clearSelectedNews())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)
