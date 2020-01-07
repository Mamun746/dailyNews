import React, { Component } from 'react';
import LatestNews from '../components/home/LatestNews'
import OtherNews from '../components/home/OtherNews'
import Gallery from '../components/home/Gallery'
import {connect} from 'react-redux'
import {getArticles,fetchOtherNews,fetchLatestGallery} from '../redux/actions/index'



class Home extends Component {
    componentDidMount(){
       this.props.latestNews(); 
       this.props.otherNews();
       this.props.latestGallery();
       
    }
    
    render() {
        return (
            <div className="Home">
            <LatestNews latest={this.props.article}/>
            <OtherNews otherNews={this.props.article.others}/>
            <Gallery latestGallery={this.props.gallery}/>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        article:state.news,
        gallery:state.gallery
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        latestNews:()=>{
            return dispatch(getArticles())
        },
        otherNews:()=>{
            return dispatch(fetchOtherNews())
        },
        latestGallery:()=>{
            return dispatch(fetchLatestGallery())
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);